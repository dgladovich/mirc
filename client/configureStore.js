import thunk from "redux-thunk";
import {applyMiddleware, createStore, combineReducers} from "redux";
import controllers from "./reducers/controllers";
import messagesReducer from './reducers/messages';
import {routerReducer} from "react-router-redux";

import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import saga from './sagas';
import reducer from './reducers/index'


export default function configureStore(initialState) {
    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(
        reducer, initialState, applyMiddleware(
        sagaMiddleware, createLogger()
        )
    );
    sagaMiddleware.run(saga);

    return store;
};