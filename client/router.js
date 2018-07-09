import React, {Component} from 'react';
import {Provider} from "react-redux";
import createHistory from "history/createBrowserHistory";
import {Route, Router, IndexRoute, Switch} from "react-router";

import configureStore from './configureStore';
import App from './components/App/App';
import ControllersContainer from './containers/ControllersContainer';
import ConversationContainer from './containers/ConversationContainer';

const history = createHistory();
const store = configureStore();

class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router history={history}>
                    <App>
                        <Route exact path='/' component={ControllersContainer}/>
                        <Route path="/:controllerId" component={ConversationContainer}/>
                    </App>
                </Router>
            </Provider>
        );
    }
}

export default Root;
