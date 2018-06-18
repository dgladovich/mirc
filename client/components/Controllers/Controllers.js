import React, {Component} from 'react';
import {List, Cell, ListItem, Grid} from 'react-mdl';
import Controller from './Controller';
class Controllers extends Component {


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

export default Controllers;