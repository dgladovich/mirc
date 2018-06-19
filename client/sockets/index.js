import * as types from '../constants/ActionTypes';
import { messagesReceived, populateUsersList } from '../actions';
import io from 'socket.io-client';

const setupSocket = (dispatch) => {
    const chat = io.connect('localhost:3000');

    chat.on('connect', ()=>{
        chat.emit('request:messages');
    });
    chat.on('messages:list', (messages)=>{
        dispatch(messagesReceived(messages));
    });
/*    chat.emit('messages:list', (messages)=>{
       console.log(messages)
    });*/


/*    socket.onopen = () => {
        socket.send(JSON.stringify({
            type: types.ADD_USER,
            name: username
        }))
    }
    socket.onmessage = (event) => {
        const data = JSON.parse(event.data)
        switch (data.type) {
            case types.ADD_MESSAGE:
                dispatch(messageReceived(data.message, data.author))
                break
            case types.USERS_LIST:
                dispatch(populateUsersList(data.users))
                break
            default:
                break
        }
    }*/

    return chat;
}

export default setupSocket