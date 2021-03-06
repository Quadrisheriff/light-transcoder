import ffprobe from 'ffprobe-static';
import exec from '../Exec';
import { parseMeta } from './MetaParser';
import { intCast } from '../../utils';

let _CACHE = {};

export default class MediaAnalyzer {

    constructor(input = '') {
        this._input = input;
        this._meta = false;
    }

    async _analyzeExec() {
        const data = await exec(ffprobe.path, ['-of', 'json', '-show_streams', '-show_format', '-show_chapters', this._input], './')
        try {
            this._meta = JSON.parse(data.stdout);
            if (JSON.stringify(this._meta) === '{}')
                return false
        } catch (err) {
            return false;
        }
        return this._meta;
    }

    async analyze() {
        if (!this._input)
            return false;
        if (_CACHE[this._input])
            return parseMeta(_CACHE[this._input]);
        const meta = await this._analyzeExec();
        if (!meta)
            return false;
        _CACHE[this._input] = meta;
        // Reminder: don't set the parsed meta in cache, this value can change in the future
        return parseMeta(meta);
    }

    async getDuration() {
        const meta = await this.analyze();
        return intCast((meta && meta.global.duration) ? meta.global.duration : 60 * 60 * 2);
    }

}