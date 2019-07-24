import {takeLatest} from 'redux-saga/effects';
import ACTION_TYPES from '../actions/actiontsTypes';
import {loginUserSaga, signUpUserSaga} from './authorizationSagas';
import {getUsersSaga} from './userSagas';

function* rootSaga() {

    yield takeLatest(ACTION_TYPES.USER_LOGIN_ACTION,loginUserSaga);
    yield takeLatest(ACTION_TYPES.USER_SIGN_UP_ACTION, signUpUserSaga);
    yield takeLatest(ACTION_TYPES.GET_USERS_ACTION, getUsersSaga);
}

export default rootSaga;
