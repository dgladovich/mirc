import {combineReducers} from 'redux';
import {routerReducer} from "react-router-redux";
import _ from 'lodash';

import {REQUEST_CONTROLLERS, RECIEVE_CONTROLLERS} from "../actions/controllers";


function controllers(state = {controllers: []}, action){
    switch (action.type) {
        case REQUEST_CONTROLLERS:
            return Object.assign({}, state);
        case RECIEVE_CONTROLLERS:
            return Object.assign({}, state, action);
        default:
            return state
    }
}

const rootReducer = combineReducers({controllers, routerReducer});

export default rootReducer;