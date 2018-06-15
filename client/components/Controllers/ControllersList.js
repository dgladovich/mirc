import React, {Component} from 'react';
import {List, Cell, ListItem, Grid} from 'react-mdl';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux'

import { fetchControllers } from "../../actions/index";


class App extends Component {
    componentDidMount() {
        let {dispatch}  = this.props;
        dispatch(fetchControllers())
    }

    componentWillReceiveProps(nextProps) {

    }
    render() {
        return (
            <div>
                <h1>Controllers list</h1>
                <Grid>
                    <Cell align={'middle'}></Cell>
                    <List>
                        <ListItem>
                            <Link to='filter'>Filter</Link>
                        </ListItem>
                        <ListItem>
                            <Link to='noria'>Noria</Link>
                        </ListItem>
                        <ListItem>
                            <Link to='chain'>Chain</Link>
                        </ListItem>
                    </List>
                </Grid>
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log('Fucking state', state)
    return { someShit: 'shit' }
};

export default connect(mapStateToProps)(App);

//export default App;