import {takeLatest, takeEvery} from 'redux-saga/effects';
import ACTION_TYPES from '../actions/actiontsTypes';
import * as authorizationSagas from './authorizationSagas';
import * as userSagas from './crudUserSaga';
import * as contestSaga from './contestSaga';

function* rootSaga() {
    /*
    * AUTHORIZATION SAGAS MIDDLEWARE
    * */
    yield takeLatest(ACTION_TYPES.AUTHORIZATION_LOGOUT_ACTION, authorizationSagas.logoutUserSaga);
    yield takeLatest(ACTION_TYPES.USER_LOGIN_ACTION, authorizationSagas.loginUserSaga);
    yield takeLatest(ACTION_TYPES.USER_SIGN_UP_ACTION, authorizationSagas.signUpUserSaga);
    yield takeLatest(ACTION_TYPES.GET_AUTHORIZED_USER, authorizationSagas.getAuthorizedUserSaga,);

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

    /*
    *
    * CONTEST SAGA MW
    *
    * */
    yield takeLatest(ACTION_TYPES.CREATE_CONTEST_ACTION, contestSaga.createContestSaga);
    yield takeLatest(ACTION_TYPES.GET_ALL_USER_CONTESTS_ACTION, contestSaga.getAllUserContestsSaga);
    yield takeEvery(ACTION_TYPES.CREATE_TASK_ACTION, contestSaga.createTaskSaga);
    yield takeLatest(ACTION_TYPES.CONTEST_PAYMENT_ACTION, contestSaga.contestPaymentSaga);
    yield takeLatest(ACTION_TYPES.GET_CONTEST_IN_DRAW_ACTION, contestSaga.getContestInDrawSaga);
    yield takeLatest(ACTION_TYPES.SELECT_TASK_TYPES_ACTION, contestSaga.addTaskStepsToContestCreationSteps);
}

export default rootSaga;
