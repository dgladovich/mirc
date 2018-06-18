import React, {Component} from 'react';
import { Provider } from "react-redux";
import createHistory from "history/createBrowserHistory";
import { Route, Router, IndexRoute, Switch } from "react-router";

import { ConnectedRouter, routerReducer, routerMiddleware, push } from "react-router-redux";

import configureStore from './configureStore';
import App from './components/App/App';
import ControllersList from './components/Controllers/ControllersList';
import ConversationField from './components/Conversations/ConversationField';
import io from 'socket.io-client';

const socket = io.connect('http://192.168.15.21:3000');

const history = createHistory();
const store = configureStore();

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
