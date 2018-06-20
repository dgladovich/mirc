import React, {Component} from 'react';
import {connect} from 'react-redux';

import MessagesList from '../components/Messages/MessagesList';
import TextInput from '../components/TextInput/TextInput';

class ConversationContainer extends Component {

    render() {
        return (
            <div>
                <MessagesList messages={this.props.messages.items}/>
                <TextInput/>
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