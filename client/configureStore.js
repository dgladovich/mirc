import {applyMiddleware, createStore, combineReducers} from "redux";
import {routerReducer} from "react-router-redux";
import {createLogger} from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import saga from './sagas';
import rootReducer from './reducers'
import SocketClient from './sockets';
import socketMiddleware from './sockets/socketMiddleware';

const socketClient = new SocketClient();
socketClient.connect();

export default function configureStore(initialState) {

    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(
        rootReducer,
        routerReducer,
        applyMiddleware(
            sagaMiddleware,
            socketMiddleware(socketClient)
        )
    );
    sagaMiddleware.run(saga)


    return store;
};