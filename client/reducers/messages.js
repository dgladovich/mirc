import { MESSAGES_LIST } from '../constants/ActionTypes';

function messagesReducer(state = {items: []}, action){
    switch (action.type) {
        case MESSAGES_LIST:
            return Object.assign({}, state, { items: action.messages });

        default:
            return state;
    }
};

export default messagesReducer;