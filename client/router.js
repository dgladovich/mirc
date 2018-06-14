import React, {Component} from 'react';
import ReactDOM from "react-dom";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";

import createHistory from "history/createBrowserHistory";
import { Route, Router } from "react-router";

import {
    ConnectedRouter,
    routerReducer,
    routerMiddleware,
    push
} from "react-router-redux";


import App from './components/App/App';
import Users from './components/Users/UsersList'
import ChatList from './components/Chats/ChatList'
import * as io from 'socket.io-client';

const history = createHistory();
const socket = io.connect('http://localhost:6000', {path: '/', forceNew: true});

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history);

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
const store = createStore(
    combineReducers({
        router: routerReducer
    }),
    applyMiddleware(middleware)
);


function subscribeToTimer(cb) {
    socket.on('timer', timestamp => cb(null, timestamp));
    socket.emit('subscribeToTimer', 1000);
}
class Root extends Component {
    render() {
        subscribeToTimer();
        return (
            <Provider store={store}>
                <Router history={history}>
                    <App>
                        <Route path="/users" component={Users}/>
                        <Route path="/chats" component={ChatList}/>
                    </App>
                </Router>
            </Provider>
        );
    }
}

export default Root;
