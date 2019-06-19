export default (io) => {
    io.on('connection', socket => {
        socket.on('message', message => {
            console.log('got message: ', message);

            // emit message to sockets
            socket.emit('got message', message);
        });
    });
};