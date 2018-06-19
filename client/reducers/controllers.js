import {REQUEST_CONTROLLERS, RECIEVE_CONTROLLERS} from "../constants/ActionTypes";


function controllers(state = {items: []}, action){
    switch (action.type) {
        case REQUEST_CONTROLLERS:
            return Object.assign({}, state);
        case RECIEVE_CONTROLLERS:
            return Object.assign({}, state, { items: action.controllers});
        default:
            return state
    }
}
export default controllers;