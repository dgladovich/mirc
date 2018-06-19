import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Textfield} from 'react-mdl';
import {fetchControllers} from "../actions/controllers";

import MessagesList from '../components/Messages/MessagesList';

class ConversationContainer extends Component {
    render() {
        return (
            <div>
                <MessagesList messages={this.props.messages.items}/>
                <textarea name="shit" id="" cols='50' rows="5"></textarea>
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