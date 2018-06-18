import React, { Component } from 'react';
import { ListItem } from 'react-mdl';
import {Link} from 'react-router-dom';


class App extends Component {
    render() {
        let path = this.props.controllerId.toString()
        return (
            <ListItem>
                <Link to={path}>{this.props.controllerName}</Link>
            </ListItem>
        );
    }
}

export default App;
