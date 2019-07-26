import {put} from 'redux-saga/effects';
import ACTION_TYPE from '../actions/actiontsTypes';
import {getUsers} from '../api/rest/userController';

export function* getUsersSaga() {

    yield put({type: ACTION_TYPE.GET_USERS_REQUEST});
    try {
        const {data} = yield getUsers();
        yield put({type: ACTION_TYPE.GET_USERS_RESPONSE, users: data});
    } catch (e) {
        yield put({
            type: ACTION_TYPE.GET_USERS_ERROR, error: {
                status: e.response.status,
                message: e.response.data,
            }
        });
    }
}


