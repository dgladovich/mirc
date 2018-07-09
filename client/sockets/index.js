import * as types from '../constants/ActionTypes';
import { messagesReceived, populateUsersList } from '../actions';
import io from 'socket.io-client';

const setupSocket = (dispatch) => {
    const chat = io.connect('localhost:3000');

    chat.on('connect', ()=>{

    });
    chat.on('messages:list', (messages)=>{
        dispatch(messagesReceived(messages));
    });
    chat.on('message',()=>{
        console.log('recieved message from server')
    });

/*    chat.emit('messages:list', (messages)=>{
       console.log(messages)
    });*/


    return chat;
};

export default setupSocket