import React, {Component} from 'react';
import {connect} from 'react-redux';
import ControllersList from '../components/Controllers/ControllersList';


class ControllersContainer extends Component {
    componentDidMount() {
        const {dispatch} = this.props;
        dispatch({type: 'FETCH_CONTROLLERS_REQUESTED'});
    }

    render() {
        return (
            <div>
                <ControllersList controllers={this.props.controllers.items}/>
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