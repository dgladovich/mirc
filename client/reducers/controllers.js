import {REQUEST_CONTROLLERS, FETCH_CONTROLLERS_SUCCEEDED, FETCH_CONTROLLERS_ERROR} from "../constants/ActionTypes";


function controllers(state = {items: []}, action){
    switch (action.type) {
        case REQUEST_CONTROLLERS:
            return Object.assign({}, state);
        case FETCH_CONTROLLERS_SUCCEEDED:
            return Object.assign({}, state, { items: action.controllers});
            case FETCH_CONTROLLERS_ERROR:
            return Object.assign({}, state, { items: action.controllers});
        default:
            return state
    }
}
export default controllers;