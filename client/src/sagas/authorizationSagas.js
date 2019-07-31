import {put} from 'redux-saga/effects';
import ACTION_TYPE from '../actions/actiontsTypes';
import {signUpUser, loginUser, getAuthorizedUser} from '../api/rest/authorizationController';
import history from "../history";
import {PATH} from "../constants";

export function* loginUserSaga({data: user}) {

    yield put({type: ACTION_TYPE.USER_AUTHORIZATION_REQUEST});
    try {
        const {data} = yield loginUser(user);
        yield put({type: ACTION_TYPE.USER_AUTHORIZATION_RESPONSE, user: data.user});
    } catch (e) {
        yield put({
            type: ACTION_TYPE.USER_AUTHORIZATION_ERROR, error: {
                status: e.response.status,
                message: e.response.data,
            }
        });
    }
}

export function* logoutUserSaga() {

    localStorage.clear();
    history.push(PATH.HOME)

}

export function* signUpUserSaga({data: user}) {
    yield put({type: ACTION_TYPE.USER_AUTHORIZATION_REQUEST});
    try {
        const {data} = yield signUpUser(user);
        yield put({type: ACTION_TYPE.USER_AUTHORIZATION_RESPONSE, user: data.user});
    } catch (e) {
        yield put({
            type: ACTION_TYPE.USER_AUTHORIZATION_ERROR, error: {
                status: e.response.status,
                message: e.response.data,
            }
        });
    }
}

export function* getAuthorizedUserSaga() {
    yield put({type: ACTION_TYPE.USER_AUTHORIZATION_REQUEST});
    try {
        const {data} = yield getAuthorizedUser();
        yield put({type: ACTION_TYPE.USER_AUTHORIZATION_RESPONSE, user: data});
    } catch (e) {
        yield put({
            type: ACTION_TYPE.USER_AUTHORIZATION_RESPONSE, error: {
                status: e.response.status,
                message: e.response.data,
            }
        });
    }
}

export function* userLoaderRequestSaga() {
    yield put

}



