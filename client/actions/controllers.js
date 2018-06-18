import fetch from 'cross-fetch';
import axios from 'axios';
import _ from 'lodash';

export const REQUEST_CONTROLLERS = 'REQUEST_CONTOLLERS';
export const RECIEVE_CONTROLLERS = 'RECIEVE_CONTROLLERS';
export const ERROR_CONTROLLERS = 'ERROR_CONTROLLERS';

function requestControllers(){
    return {
        type: REQUEST_CONTROLLERS
    }
}
function recieveControllers(controllers){
    return {
        type: RECIEVE_CONTROLLERS,
        controllers: _.toArray(controllers)
    }
}

export function fetchControllers() {
    return dispatch => {
        dispatch(requestControllers())
        return axios.get(`http://192.168.15.21:5000/controllers`)
            .then(ctrls => dispatch(recieveControllers(ctrls.data)))
    }
}
