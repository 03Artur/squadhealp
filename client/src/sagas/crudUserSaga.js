import {put} from 'redux-saga/effects';
import ACTION_TYPE from '../actions/actiontsTypes';
import * as userController from '../api/rest/userController';


export function* getUsersSaga({queryString}) {

    yield put({type: ACTION_TYPE.GET_USERS_REQUEST});
    try {
        const {data} = yield userController.getUsers(queryString);

        yield put({type: ACTION_TYPE.GET_USERS_RESPONSE, users: data.rows, count: data.count});
    } catch (e) {
        yield put({
            type: ACTION_TYPE.GET_USERS_ERROR, error: e.response,


        });
    }
}

export function* createUserSaga({user}) {
    yield put({type: ACTION_TYPE.CREATE_USER_REQUEST});
    try {
        const {data} = yield userController.createUser(user);
        yield put({type: ACTION_TYPE.CREATE_USER_RESPONSE, data});
    } catch (e) {
        yield put({
            type: ACTION_TYPE.CREATE_USER_ERROR, error: e.response.data,
        });
    }
}

export function* getUserSaga(id) {
    yield put({type: ACTION_TYPE.GET_USER_REQUEST});
    try {
        const {data} = yield userController.getUserById(id);
        yield put({type: ACTION_TYPE.GET_USER_RESPONSE, user: data});
    } catch (e) {
        yield put({
            type: ACTION_TYPE.GET_USER_ERROR,  error: e.response,
        });
    }
}


export function* updateUserSaga({id, user}) {
    yield put({type: ACTION_TYPE.UPDATE_USER_REQUEST});
    try {

        const {data} = yield userController.updateUserById(id, user);

        yield put({type: ACTION_TYPE.UPDATE_USER_RESPONSE, user: data});
    } catch (e) {
        yield put({
            type: ACTION_TYPE.UPDATE_USER_ERROR,  error: e.response,
        });
    }
}

export function* deleteUserSaga({id}) {
    yield put({type: ACTION_TYPE.DELETE_USER_REQUEST});
    try {
        const {data} = yield userController.deleteUserById(id);
        yield put({type: ACTION_TYPE.DELETE_USER_RESPONSE, data});
    } catch (e) {
        yield put({
            type: ACTION_TYPE.DELETE_USER_ERROR, error: e.response,
        });
    }
}



