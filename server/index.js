import express, { static } from 'express';
import socketio from 'socket.io';
import socket from './socket.js';
import { join } from 'path';

const app = express();
const socketServer = require('http').Server(app);
const io = socketio(socketServer);

const port = process.env.PORT || 3000;
const DIST_DIR = join(__dirname, '../dist');
const mockResponse = {
    foo: 'bar',
    bar: 'foo'
};

app.use(static(DIST_DIR));

app.get('/api', (req, res) => {
    res.send(mockResponse);
});

app.get('/', (req, res) => {
    res.sendFile(join(DIST_DIR, 'index.html'));
});

socket(io);

socketServer.listen(port, () => console.log('listening on port ' + port));