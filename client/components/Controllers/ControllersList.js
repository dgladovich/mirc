import React, {Component} from 'react';
import {List, Cell, ListItem, Grid} from 'react-mdl';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchControllers} from "../../actions/controllers";
import _ from 'lodash';
import Controller from './Controller';

class App extends Component {
    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(fetchControllers());
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <h1>Controllers list</h1>
                <Grid>
                    <Cell align={'middle'}></Cell>
                    <List>
                        {
                            this.props.controllers.controllers.map((ctrl) => {
                                return (
                                    <Controller
                                        key={ctrl.id}
                                        controllerId={ctrl.id}
                                        controllerName={ctrl.name}
                                    />
                                )
                            })
                        }
                    </List>
                </Grid>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps)(App);