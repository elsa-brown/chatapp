import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { init as websocketInit, emit } from '../actions/websockets';

const store = createStore(
    reducer,
    applyMiddleware(
        createLogger(),
        thunkMiddleware.withExtraArgument({ emit })
    ),
);

export default websocketInit(store);