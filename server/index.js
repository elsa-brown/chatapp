const express = require('express');
const socketio = require('socket.io');
const path = require('path');

const app = express();
const socketServer = require('http').Server(app);
const io = socketio(socketServer);

const port = process.env.PORT || 3000;
const DIST_DIR = path.join(__dirname, '../dist');
const mockResponse = {
    foo: 'bar',
    bar: 'foo'
};

app.use(express.static(DIST_DIR));

app.get('/api', (req, res) => {
    res.send(mockResponse);
});

app.get('/', (req, res) => {
    res.sendFile(join(DIST_DIR, 'index.html'));
});

io.on('connection', socket => {
    socket.on('message', message => {
        console.log('got message: ', message);

        // emit message to sockets
        socket.emit('got message', message);
    });
});

socketServer.listen(port, () => console.log('listening on port ' + port));