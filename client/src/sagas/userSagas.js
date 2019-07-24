import {put} from 'redux-saga/effects';
import ACTION_TYPE from '../actions/actiontsTypes';
import {getUsers} from '../api/rest/userController';

export function* getUsersSaga({count,offset}) {

    yield put({type: ACTION_TYPE.USER_AUTHORIZATION_REQUEST});
    try {
        const {data} = yield loginUser(user);
        yield put({type: ACTION_TYPE.USER_AUTHORIZATION_RESPONSE, user: data.user});
    } catch (e) {
        console.log(e.response);
        yield put({type: ACTION_TYPE.USER_AUTHORIZATION_ERROR, error: e.response});
    }
}


