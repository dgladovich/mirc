import {REQUEST_MESSAGES, REQUEST_MESSAGES_SUCCESS, REQUEST_MESSAGES_FAILURE} from '../constants/ActionTypes';

export function requestMessages(chatId, content) {
    const message = { chatId, content };
    return {
        type: 'socket',
        types: [REQUEST_MESSAGES, REQUEST_MESSAGES_SUCCESS, REQUEST_MESSAGES_FAILURE],
        promise: (socket) => {
            console.log('socket', socket)
            socket.emit('SendMessage', message);
        }
    }
}