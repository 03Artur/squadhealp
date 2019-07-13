import { takeLatest } from 'redux-saga/effects';
import ACTION from '../actions/actiontsTypes';
import {
  getGoodsSaga, getOneGoodsSaga,
} from './goodsSaga';

function* rootSaga() {
  yield takeLatest(ACTION.GOODS_ACTION, getGoodsSaga);
  yield takeLatest(ACTION.SINGLE_GOODS_ACTION, getOneGoodsSaga);
}

export default rootSaga;
