import {put} from 'redux-saga/effects';
import ACTION_TYPE from '../actions/actiontsTypes';
import {signUpUser, loginUser} from '../api/rest/authorizationController';

export function* loginUserSaga({data: user}) {
    yield put({type: ACTION_TYPE.USER_AUTHORIZATION_REQUEST});
    try {
        const {data} = yield loginUser(user);
        yield put({type: ACTION_TYPE.USER_AUTHORIZATION_RESPONSE, user: data.user});
    } catch (e) {
        yield put({type: ACTION_TYPE.USER_AUTHORIZATION_ERROR, error: e});
    }
}

export function* signUpUserSaga({data: user}) {
    console.log("signUpUserSaga");
    yield put({type: ACTION_TYPE.USER_AUTHORIZATION_REQUEST});
    try {
        const {data} = yield signUpUser(user);
        yield put({type: ACTION_TYPE.USER_AUTHORIZATION_RESPONSE, user: data.user});
    } catch (e) {
        yield put({type: ACTION_TYPE.USER_AUTHORIZATION_ERROR, error: e});
    }
}
