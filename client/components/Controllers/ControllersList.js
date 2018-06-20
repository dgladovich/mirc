import React, {Component} from 'react';
import {List, Cell, ListItem, Grid} from 'react-mdl';
import Controller from './Controller';

class ControllersList extends Component {
    render() {
        return (
            <div>
                <h3>Controllers list</h3>
                <Grid>
                    <Cell align={'middle'}></Cell>
                    <List>
                        {
                            this.props.controllers.map((ctrl) => {
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

export default ControllersList;