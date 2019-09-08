import {put} from 'redux-saga/effects';
import ACTION_TYPE from '../actions/actiontsTypes';
import {signUpUser, loginUser, getAuthorizedUser, logoutUser} from '../api/rest/authorizationController';


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
            },
        });
    }
}
export function* logoutUserSaga() {

    try {

        const {data} = yield logoutUser();
        yield put({
            type: ACTION_TYPE.USER_AUTHORIZATION_RESPONSE,
            user: null,
        })


    } catch (e) {
        yield put({
            type: ACTION_TYPE.USER_AUTHORIZATION_ERROR,
            user: null,
        })

    }
}
export function* signUpUserSaga({data: user}) {
    yield put({type: ACTION_TYPE.USER_AUTHORIZATION_REQUEST});
    try {
        user.passwordConfirmation = undefined;

        const {data} = yield signUpUser(user);
        yield put({type: ACTION_TYPE.USER_AUTHORIZATION_RESPONSE, user: data.user});
    } catch (e) {
        yield put({
            type: ACTION_TYPE.USER_AUTHORIZATION_ERROR, error: {
                status: e.response.status,
                message: e.response.data,
            },
        });
    }
}
export function* getAuthorizedUserSaga() {
    yield put({type: ACTION_TYPE.USER_AUTHORIZATION_REQUEST});
    try {
        const {data} = yield getAuthorizedUser();
        console.log('SAGA DATA: ', data);
        yield put({type: ACTION_TYPE.USER_AUTHORIZATION_RESPONSE, user: data});
    } catch (e) {
        yield put({
            type: ACTION_TYPE.USER_AUTHORIZATION_ERROR, error: {
                status: e.response.status,
                message: e.response.data,
            },
        });
    }
}





