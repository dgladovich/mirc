import React, {Component} from 'react';
import {connect} from 'react-redux';

import MessagesList from '../components/Messages/MessagesList';
import TextInput from '../components/TextInput/TextInput';
import {REQUEST_MESSAGES, REQUEST_MESSAGES_FAILURE, REQUEST_MESSAGES_SUCCESS} from "../constants/ActionTypes";

class ConversationContainer extends Component {
    componentDidMount(){
        const { dispatch, match } = this.props;
        let {controllerId} = match.params;
        dispatch({
            type: 'socket',
            types: [REQUEST_MESSAGES, REQUEST_MESSAGES_SUCCESS, REQUEST_MESSAGES_FAILURE],
            promise: socket => {
                return socket.emit('messages:request', {controllerId})
            }
        })

    }
    render() {
        return (
            <div>
                <MessagesList messages={this.props.messages.items}/>
                <TextInput dispatch={this.props.dispatch}/>
            </div>
        );
    }
}


function mapStateToProps(state) {

    return {
        messages: state.messages
    }
}

export default connect(mapStateToProps)(ConversationContainer);