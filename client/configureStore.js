import thunk from "redux-thunk";
import {applyMiddleware, createStore, combineReducers} from "redux";
import controllers from "./reducers/controllers";
import messagesReducer from './reducers/messages';
import {routerReducer} from "react-router-redux";

export default function configureStore(){
    return createStore(
        combineReducers({
            controllers: controllers,
            messages: messagesReducer,
            routerReducer: routerReducer
        }),
        applyMiddleware(thunk)
    );
};