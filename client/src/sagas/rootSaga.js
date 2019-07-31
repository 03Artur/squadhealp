import {takeLatest, takeEvery} from 'redux-saga/effects';
import ACTION_TYPES from '../actions/actiontsTypes';
import * as authorizationSagas from './authorizationSagas';
import * as userSagas from './crudUserSaga';

function* rootSaga() {

    /*
    * AUTHORIZATION SAGAS MIDDLEWARE
    * */
    yield takeLatest(ACTION_TYPES.USER_LOGIN_ACTION, authorizationSagas.loginUserSaga);
    yield takeLatest(ACTION_TYPES.USER_SIGN_UP_ACTION, authorizationSagas.signUpUserSaga);
    yield takeLatest(ACTION_TYPES.GET_AUTHORIZED_USER, authorizationSagas.getAuthorizedUserSaga,);
    yield takeEvery(ACTION_TYPES.AUTHORIZATION_LOGOUT_ACTION, authorizationSagas.logoutUserSaga);

    /*
    * CRUD USERS SAGAS MIDDLEWARE
    * */
    yield takeLatest(ACTION_TYPES.GET_USERS_ACTION, userSagas.getUsersSaga);

    /*
    * CRUD USER SAGAS MIDDLEWARE
    * */
    yield takeLatest(ACTION_TYPES.CREATE_USER_ACTION, userSagas.createUserSaga);
    yield takeLatest(ACTION_TYPES.GET_USER_ACTION, userSagas.getUserSaga);
    yield takeEvery(ACTION_TYPES.UPDATE_USER_ACTION, userSagas.updateUserSaga);
    yield takeEvery(ACTION_TYPES.DELETE_USER_ACTION, userSagas.deleteUserSaga);
}

export default rootSaga;
