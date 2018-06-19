import {REQUEST_CONTROLLERS, RECIEVE_CONTROLLERS} from "../actions/controllers";


function controllers(state = {items: []}, action){
    switch (action.type) {
        case REQUEST_CONTROLLERS:
            return Object.assign({}, state);
        case RECIEVE_CONTROLLERS:
            return Object.assign({}, state, action);
        default:
            return state
    }
}
export default controllers;