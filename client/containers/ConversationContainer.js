import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchControllers} from "../actions/controllers";

import MessagesList from '../components/Messages/MessagesList';

class ConversationContainer extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <MessagesList/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log(state)
    return state
}

export default connect(mapStateToProps)(ConversationContainer);