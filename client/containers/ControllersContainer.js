import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchControllers} from "../actions/controllers";
import Controllers from '../components/Controllers/Controllers';

class ControllersContainer extends Component {
/*    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(fetchControllers());
    }*/

    render() {

        return (
            <div>
                <Controllers/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        controllers: state.controllers
    }
}

export default connect(mapStateToProps)(ControllersContainer);