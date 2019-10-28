import express from 'express';
import bodyParser from 'body-parser';

import cors from 'cors';
import StreamingBrain from './streamingBrain';
import Session from './Session';
import MediaAnalyzer from './mediaAnalyzer';
import config from './config';

// Init our express app
const app = express();

// Body parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));
app.use((err, req, res, next) => {
    if (err instanceof SyntaxError && err.status >= 400 && err.status < 500 && err.message.indexOf('JSON'))
        return res.status(400).send({ error: { code: 'INVALID_DATA', message: 'Syntax error in the JSON body' } });
    return next();
});

// CORS
app.use(cors());

let SessionsArray = {}

app.post('/media/analyze', async (req, res) => {
    const input = req.body.url;
    const analyzer = new MediaAnalyzer(input);
    const meta = await analyzer.analyze();
    const sb = new StreamingBrain(input, meta);
    const profiles = sb.getProfiles();
    res.send({ meta, profiles });
})

app.post('/session', async (req, res) => {
    if (!req.body.url)
        return res.status(404).send('url not found in body');
    if (!req.body.profile)
        return res.status(404).send('profile not found in body');
    const profileId = req.body.profile;
    const input = req.body.url;
    const analyzer = new MediaAnalyzer(input);
    const meta = await analyzer.analyze();
    const sb = new StreamingBrain(input, meta, profileId);
    const session = new Session(analyzer, sb);
    session.start();
    SessionsArray[session.getUuid()] = session;
    res.send({ session: { uuid: session.getUuid(), stream:{type:'HLS', url: `${config.server.public}session/${session.getUuid()}/hls/master.m3u8`} } });
});

app.get('/session/:sessionid/hls/master.m3u8', (req, res) => {
    const session = SessionsArray[req.params.sessionid];
    if (!session)
        return res.status(404).send('404');
    session.routeSendHLSMaster(req, res);
})

app.get('/session/:sessionid/hls/stream.m3u8', (req, res) => {
    const session = SessionsArray[req.params.sessionid];
    if (!session)
        return res.status(404).send('404');
    session.routeSendHLSStream(req, res);
});

app.get('/session/:sessionid/hls/:id.ts', (req, res) => {
    const session = SessionsArray[req.params.sessionid];
    if (!session)
        return res.status(404).send('404');
    session.routeSendChunk(req.params.id, req, res);
});

// Bind and start
const server = app.listen(config.server.port);

// Catch SIGTERM and SIGKILL
['SIGTERM', 'SIGKILL'].forEach(signal => {
    process.on(signal, () => {
        server.close(() => {
            process.exit(0);
        });
    });
});
console.log(`API was launched on port ${config.server.port}`);
