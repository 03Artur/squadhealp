import {takeLatest} from 'redux-saga/effects';
import ACTION_TYPES from '../actions/actiontsTypes';
import {getGoodsSaga, getOneGoodsSaga} from './goodsSaga';
import {loginUserSaga} from './authorizationSaga';

function* rootSaga() {
    yield takeLatest(ACTION_TYPES.GOODS_ACTION, getGoodsSaga);
    yield takeLatest(ACTION_TYPES.SINGLE_GOODS_ACTION, getOneGoodsSaga);
    yield takeLatest(ACTION_TYPES.USER_LOGIN_ACTION,loginUserSaga)
}

export default rootSaga;
