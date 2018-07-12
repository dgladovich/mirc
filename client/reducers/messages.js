import {REQUEST_MESSAGES, REQUEST_MESSAGES_FAILURE, REQUEST_MESSAGES_SUCCESS} from '../constants/ActionTypes';

function messagesReducer(state = {items: []}, action) {
    switch (action.type) {
        case REQUEST_MESSAGES:
            return Object.assign({}, state);
        case REQUEST_MESSAGES_SUCCESS:
            return Object.assign({}, state, {items: action.result});
        case REQUEST_MESSAGES_FAILURE:
            return Object.assign({}, state, {items: action.messages});

        default:
            return state;
    }
};

export default messagesReducer;