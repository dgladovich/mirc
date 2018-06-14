import React, {Component} from 'react';
import ReactDOM from "react-dom";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";

import createHistory from "history/createBrowserHistory";
import { Route } from "react-router";

import {
    ConnectedRouter,
    routerReducer,
    routerMiddleware,
    push
} from "react-router-redux";


import App from './components/App/App';
import Users from './components/Users/UsersList'
import ChatList from './components/Chats/ChatList'


const history = createHistory();

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
class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <App>
                        <Route path="/users" component={Users}/>
                        <Route path="/chats" component={ChatList}/>
                    </App>
                </ConnectedRouter>
            </Provider>
        );
    }
}

export default Root;
