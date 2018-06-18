import { REQUEST_CONTROLLERS,  RECIEVE_CONTROLLERS } from '../actions/controllers'


function controllers(state = {controllers: []}, action){
    console.log(state , action)
    switch (action.type) {
        case REQUEST_CONTROLLERS:
            console.log('calling some shit')
            return state;
        case RECIEVE_CONTROLLERS:
            return state;
;
        default:
            return state
    }
};

export default controllers;