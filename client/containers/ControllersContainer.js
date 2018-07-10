import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchControllers} from "../actions/controllers";
import ControllersList from '../components/Controllers/ControllersList';
import {send} from '../actions/socket'


class ControllersContainer extends Component {
    /*    componentDidMount() {
            const {dispatch} = this.props;
            dispatch(fetchControllers());
        }*/
    sendSocket() {
        let {dispatch} = this.props;
        dispatch(send('shit', 'shit'));


    }

    render() {
        console.log(this.props, this.state)
        return (
            <div>
                <button onClick={this.sendSocket.bind(this)}>send socket</button>
                {/*<ControllersList controllers={this.props.controllers.items}/>*/}
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