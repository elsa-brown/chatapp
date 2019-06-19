import io from 'socket.io-client';

const socket = io('/');

export const init = (store) => {
    socket.on('got message', message => {
        store.dispatch({ type: 'got message', message});
    });
};

export const emit = (type, payload) => socket.emit(type, payload);
