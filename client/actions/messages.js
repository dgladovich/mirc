import axios from 'axios';
import _ from 'lodash';

export const REQUEST_MESSAGES = 'REQUESTMESSAGES';
export const RECIEVE_MESSAGES = 'RECIEVE_MESSAGES';
export const ERROR_MESSAGES = 'ERROR_MESSAGES';

function requestMessages(controllerId){
    return {
        type: REQUEST_MESSAGES,
        controllerId: controllerId
    }
}
function recieveMessages(controllerId){
    return {
        type: RECIEVE_MESSAGES,
        messages: _.toArray(controllers),
        controllerId: controllerId

    }
}

export function fetchMessages(controllerId) {
    return dispatch => {
        dispatch(requestMessages())
        return axios.get(`http://localhost:5000/controllers`)
            .then(ctrls => dispatch(recieveMessages(ctrls.data)))
    }
}

export function fetchtMessagesById(controllerId){
    return dispatch => {
        dispatch(requestMessages(controllerId));
        return
    }
}