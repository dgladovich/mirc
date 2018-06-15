import React, {Component} from 'react';
import ReactDOM from "react-dom";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from 'redux-thunk';
import createHistory from "history/createBrowserHistory";
import { Route, Router, IndexRoute, Switch } from "react-router";

import {
    ConnectedRouter,
    routerReducer,
    routerMiddleware,
    push
} from "react-router-redux";


import App from './components/App/App';
import Users from './components/Users/UsersList'
import rootReducers from './reducers';
import ControllersList from './components/Controllers/ControllersList';
import ConversationField from './components/Conversations/ConversationField';

const history = createHistory();
const middleware = routerMiddleware(history);

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
const store = createStore(
    combineReducers({
        ...rootReducers,
        router: routerReducer
    }),
    applyMiddleware(middleware),
    applyMiddleware(thunk)
);


class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router history={history}>
                    <App>
                        <Route exact path='/' component={ControllersList}/>
                        <Route path="/:controllerId" component={ConversationField}/>
                    </App>
                </Router>
            </Provider>
        );
    }
}

export default Root;
