import React, {Component} from 'react';
import {List, ListItem, Grid, Cell} from 'react-mdl';

class OwnMessage extends Component {

    render() {
        return (
            <Grid>
                <Cell col={1}>{this.props.userId}</Cell>
                <Cell col={10}>{this.props.text}</Cell>
            </Grid>

        );
    }
}


export default OwnMessage;
