import {applyMiddleware, createStore, combineReducers} from "redux";
import {routerReducer} from "react-router-redux";
import {createLogger} from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import saga from './sagas';
import reducer from './reducers/index'
import SocketClient from './sockets';
import socketMiddleware from './sockets/socketMiddleware';

const socketClient = new SocketClient();
socketClient.connect();

export default function configureStore(initialState) {

    const store = createStore(
        reducer,
        routerReducer,
        initialState,
        applyMiddleware(
            createLogger(), socketMiddleware(socketClient)
        )
    );

    return store;
};