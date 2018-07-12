/* eslint-disable no-constant-condition */
import { take, put, call, fork, select, all, takeEvery } from 'redux-saga/effects'
import { api, history } from '../services';
import { FETCH_CONTROLLERS_SUCCEEDED, FETCH_CONTROLLERS_ERROR } from '../constants/ActionTypes';

// each entity defines 3 creators { request, success, failure }



// load user unless it is cached
function* fetchControllers(action) {
    try {
        const data = yield call(api.fetchControllers, '/controllers');
        yield put({type: FETCH_CONTROLLERS_SUCCEEDED, controllers: data.data})
    } catch (error) {
        yield put({type: FETCH_CONTROLLERS_ERROR, error})
    }
}



/******************************************************************************/
/******************************* WATCHERS *************************************/
/******************************************************************************/


function* watchLoadControllerPage() {
    yield takeEvery('FETCH_CONTROLLERS_REQUESTED', fetchControllers)
}


export default function* root() {
    yield all([
        fork(watchLoadControllerPage),
    ])
}