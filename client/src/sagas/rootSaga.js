import {takeLatest} from 'redux-saga/effects';
import ACTION_TYPES from '../actions/actiontsTypes';
import {getGoodsSaga, getOneGoodsSaga} from './goodsSaga';
import {loginUserSaga, signUpUserSaga} from './authorizationSaga';

function* rootSaga() {
    yield takeLatest(ACTION_TYPES.GOODS_ACTION, getGoodsSaga);
    yield takeLatest(ACTION_TYPES.SINGLE_GOODS_ACTION, getOneGoodsSaga);
    yield takeLatest(ACTION_TYPES.USER_LOGIN_ACTION,loginUserSaga);
    yield takeLatest(ACTION_TYPES.USER_SIGN_UP_ACTION, signUpUserSaga);
}

export default rootSaga;
