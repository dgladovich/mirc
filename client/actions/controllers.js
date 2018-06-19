import axios from 'axios';
import _ from 'lodash';
import * as types from '../constants/ActionTypes';

function requestControllers(){
    return {
        type: types.REQUEST_CONTROLLERS
    }
}
function recieveControllers(controllers){
    return {
        type: types.RECIEVE_CONTROLLERS,
        controllers: _.toArray(controllers)
    }
}

export function fetchControllers() {
    return dispatch => {
        dispatch(requestControllers())
        return axios.get(`http://localhost:3000/controllers`)
            .then(ctrls => dispatch(recieveControllers(ctrls.data)))
    }
}
