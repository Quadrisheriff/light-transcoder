import { createReadStream, stat } from 'fs';
import { execFile } from 'child_process';
import uuid from 'uuid/v4';
import mkdirp from 'mkdirp'
import ffmpeg from 'ffmpeg-static';

import FFmpegLogParser from './LogParser';
import ChunkStore from '../ChunkStore';

export default class Transcoder {

    constructor({
        config = {},
        dir = './',
    }) {
        this._uuid = uuid();
        this._config = config;
        this._dir = `${dir}transcoder-${this._uuid}/`;
        this._chunkStores = [];
        this._logParser = false;


        // Init all the stores
        (new Array(this._config.streams.length)).fill('').forEach(() => {
            this._chunkStores.push(new ChunkStore());
        })

        // Init the log parser
        this._logParser = new FFmpegLogParser({
            protocol: this._config.protocol,
            onChunkStart: (track, id) => {
                this._chunkStores[track].setChunkStatus(id, 'IN_PROGRESS');
            },
            onChunkReady: (track, id) => {
                this._chunkStores[track].setChunkStatus(id, 'READY');
            }
        });
    }

    getChunkStores() {
        return this._chunkStores;
    }

    getCommand() {
        // Args
        const args = [];

        // Inputs
        const inputs = [...new Set(this._config.streams.map(e => (e.path)))];

        /* 
        TODO
        // Bind codecs
        args.push('-codec:0', 'vc1', '-codec:1', 'ac3',)

        // TODO calc start based on chunk duration
        args.push('-ss', this._startAt, '-noaccurate_seek') // Personnal note: I didn't understand why/when -noaccurate_seek is added, sometimes on Plex, always on Emby
        */

        // 
        args.push('-ss', '0', '-noaccurate_seek');

        // Bind inputs
        inputs.forEach(input => {
            args.push('-analyzeduration', 20000000, '-probesize', 20000000, '-i', input);
        });

        const filters = [];
        const map = [];

        // Prepare streams
        this._config.streams.forEach((stream, idx) => {
            let streamTag = `${inputs.indexOf(stream.path)}:${(stream.type === 'video') ? 'v' : (stream.type === 'audio') ? 'a' : '?'}:${stream.id}`;

            // Video stream
            if (stream.type === 'video') {

                // It's a direct stream
                if (stream.codec.encoder === 'copy') {
                    map.push(streamTag);
                }
                // Transcoded stream
                else {
                    // Todo: compare height and width, don't rescale if not needed
                    const streamFilters = [
                        `scale=${stream.resolution.width}:${stream.resolution.height}:force_original_aspect_ratio=disable`,
                        `setdar=${stream.resolution.width}/${stream.resolution.height}`,
                        'format=pix_fmts=yuv420p|nv12',

                        // Todo: interlated content + rescale = KO
                        // Todo: HDR content + transcode => Tonemapping required
                        // Todo: Check rotated videos
                    ];
                    filters.push(`[${streamTag}]${streamFilters.join(',')}[o${idx}]`);
                    map.push(`o${idx}`);
                }
            }
            // Audio stream
            else if (stream.type === 'audio') {

                // It's a direct stream
                if (stream.codec.encoder === 'copy') {
                    map.push(streamTag);
                }
                // Transcoded stream
                else {
                    const streamFilters = [
                        ...(((stream.meta.channels || 0).channels !== stream.sample) ? [`aresample=async=1:ocl='stereo':osr=${stream.sample}`] : []),
                        ...((stream.delay) ? [`atrim=${stream.delay}`, 'asetpts=PTS-STARTPTS'] : []),
                    ];
                    filters.push(`[${streamTag}]${streamFilters.join(',')}[o${idx}]`);
                    map.push(`o${idx}`);
                }
            }
        });

        // Add filters
        filters.forEach((filter) => {
            args.push('-filter_complex', filter);
        });

        // Map streams
        map.forEach((output) => {
            args.push('-map', output.indexOf(':') === -1 ? `[${output}]` : output);
        });

        // Output codec
        this._config.streams.forEach((stream, idx) => {

            // Video stream
            if (stream.type === 'video') {

                // It's a direct stream
                if (stream.codec.encoder === 'copy') {
                    args.push(
                        `-codec:${idx}`,
                        'copy',
                        `-force_key_frames:${idx}`,
                        `expr:gte(t,${this._config.startAt === 0 ? '' : `${this._config.startAt}+`}n_forced*${this._config.chunkDuration})`
                    )
                }
                // Transcoded stream
                else {
                    args.push(
                        `-codec:${idx}`,
                        stream.codec.encoder,
                        `-crf:${idx}`,
                        stream.codec.options.x264crf,
                        `-maxrate:${idx}`,
                        `${stream.bitrate}k`,
                        `-bufsize:${idx}`,
                        `${2 * stream.bitrate}k`,
                        `-r:${idx}`,
                        stream.framerate,
                        `-preset:${idx}`,
                        stream.codec.options.x264preset,
                        `-x264opts:${idx}`,
                        `subme=${stream.codec.options.x264subme}:me_range=4:rc_lookahead=10:me=dia:no_chroma_me:8x8dct=0:partitions=none`,
                        `-force_key_frames:${idx}`,
                        `expr:gte(t,${this._config.startAt === 0 ? '' : `${this._config.startAt}+`}n_forced*${this._config.chunkDuration})`
                    );
                }
            }
            // Audio stream
            else if (stream.type === 'audio') {

                // It's a direct stream
                if (stream.codec.encoder === 'copy') {
                    args.push(
                        `-codec:${idx}`,
                        'copy'
                    );
                }
                // Transcoded stream
                else {
                    args.push(
                        `-codec:${idx}`,
                        stream.codec.encoder,
                        `-b:${idx}`,
                        `${stream.bitrate}k`
                    );
                }
            }
        });

        // HLS output params
        if (this._config.protocol === 'HLS') {
            args.push(
                '-f',
                'hls',
                '-hls_time',
                this._config.chunkDuration,
                '-hls_flags',
                'split_by_time',
                '-hls_playlist_type',
                'event',
                `hls.m3u8`
            );
        }
        // DASH
        else if (this._config.protocol === 'DASH') {
            args.push(
                '-f',
                'dash',
                '-seg_duration',
                this._config.chunkDuration,
                //'-dash_segment_type',
                //'mp4',
                "-avoid_negative_ts",
                "disabled",
                "-map_metadata",
                "-1",
                "-map_chapters",
                "-1",

                'manifest.mpd',
            );
        }
        // LONG-POLLING
        else if (this._config.protocol === 'POLLING') {
            // Todo
        }
        // EXPORT
        else if (this._config.protocol === 'EXPORT') {
            // Export in a single file (media sync)
        }

        args.push(
            '-start_at_zero',
            '-copyts',
            ...((this._config.startAt === 0) ? [
                '-vsync',
                'cfr'
            ] : [])
        );

        // Enable verbose logs to catch FFmpeg events
        args.push(
            '-loglevel',
            'verbose',
        );

        // Overwrite files
        args.push('-y');

        // Returns args
        return args;
    }

    sendChunkStream(track, id, res) {
        return new Promise((resolve, reject) => {
            let path = false;
            if (this._config.protocol === 'HLS') {
                path = `${this._dir}hls${id}.ts`; // Basic HLS chunk
            } else if (this._config.protocol === 'DASH' && id !== 'initial') {
                path = `${this._dir}chunk-stream${track}-${(id).toString().padStart(5, '0')}.m4s`; // Basic DASH chunk
            } else if (this._config.protocol === 'DASH' && id === 'initial') {
                path = `${this._dir}init-stream${track}.m4s`; // Initial DASH chunk
            }
            console.log('Sending chunk', id, path);
            stat(path, (err) => {
                if (err)
                    return reject(err);
                const stream = createReadStream(path);
                stream.on('end', () => { res.end(); return resolve(id) });
                stream.on('error', (err) => { res.end(); return reject(id, err) });
                stream.pipe(res);
            });
        });
    }

    start() {
        // Todo comment & clean
        mkdirp(this._dir, (err) => {
            if (err)
                return;
            const binary = ffmpeg;
            const args = this.getCommand();
            console.log(`${binary} ${args.map((a) => (`'${a}'`)).join(' ')}`);
            const exec = execFile(binary, [...args], { cwd: this._dir });
            const end = () => {
                /* resolve({
                     binary,
                     args,
                     cwd,
                     stdout,
                     stderr,
                 });*/
            };
            exec.stdout.on('data', (data) => {
                stdout += data;
            });
            exec.stderr.on('data', (data) => {
                this._logParser.parse(data);
            });
            exec.on('close', end);
            exec.on('exit', end);
        })
    }
}