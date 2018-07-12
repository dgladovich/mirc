import * as types from '../constants/ActionTypes';

let nextMessageId = 0;
let nextUserId = 0;
const URL = 'http://localhost:5000/controllers';

export const loadControllers = ()=> (dispatch, getState) => {
    return fetch(URL)
        .then((data)=>{
            console.log('fetched controllers list')
        })
        .catch((e)=>{
            console.log(e)
        });

};

export const toggleTodo = () => (dispatch, getState) => {
  console.log('Toggling todo')
};


export const addMessage = (message, author) => ({
    type: types.ADD_MESSAGE,
    id: nextMessageId++,
    message,
    author
});

export const messagesReceived = (messages) => ({
    type: types.MESSAGES_LIST,
    messages
});

export const addUser = name => ({
    type: types.ADD_USER,
    id: nextUserId++,
    name
});

export const populateUsersList = users => ({
    type: types.USERS_LIST,
    users
});