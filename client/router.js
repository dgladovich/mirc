import React, {Component} from 'react';
import { Provider } from "react-redux";
import createHistory from "history/createBrowserHistory";
import { Route, Router, IndexRoute, Switch } from "react-router";

import { ConnectedRouter, routerReducer, routerMiddleware, push } from "react-router-redux";

import configureStore from './configureStore';
import App from './components/App/App';
import ControllersList from './components/Controllers/ControllersList';
import ConversationField from './components/Conversations/ConversationField';
import setupSocket from './sockets';

const history = createHistory();
const store = configureStore();
const socket = setupSocket();

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
