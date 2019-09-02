import {takeLatest, takeEvery} from 'redux-saga/effects';
import ACTION_TYPES from '../actions/actiontsTypes';
import CHAT_ACTION_TYPES from "../actions/actionTypes/chatActionTypes";
import * as authorizationSagas from './authorizationSagas';
import * as userSagas from './crudUserSaga';
import * as contestSaga from './contestSaga';
import * as chatSaga from './chatSagas'

function* rootSaga() {
    /*
    * AUTHORIZATION SAGAS MIDDLEWARE
    * */
    yield takeLatest(ACTION_TYPES.AUTHORIZATION_LOGOUT_ACTION, authorizationSagas.logoutUserSaga);
    yield takeLatest(ACTION_TYPES.USER_LOGIN_ACTION, authorizationSagas.loginUserSaga);
    yield takeLatest(ACTION_TYPES.USER_SIGN_UP_ACTION, authorizationSagas.signUpUserSaga);
    yield takeLatest(ACTION_TYPES.GET_AUTHORIZED_USER, authorizationSagas.getAuthorizedUserSaga,);
    /*
        yield takeLatest(ACTION_TYPES.USER_AUTHORIZATION_RESPONSE,authorizationSagas.)
    */
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
    yield takeLatest(ACTION_TYPES.GET_ALL_USER_CONTESTS_ACTION, contestSaga.getAllUserContestsSaga);

    yield takeLatest(ACTION_TYPES.CREATE_CONTEST_ACTION, contestSaga.createContestSaga);
    yield takeEvery(ACTION_TYPES.CREATE_TASK_ACTION, contestSaga.createTaskSaga);
    yield takeLatest(ACTION_TYPES.CONTEST_PAYMENT_ACTION, contestSaga.contestPaymentSaga);
    yield takeLatest(ACTION_TYPES.GET_CONTEST_IN_DRAW_ACTION, contestSaga.getContestInDrawSaga);
    yield takeLatest(ACTION_TYPES.SELECT_TASK_TYPES_ACTION, contestSaga.addTaskStepsToContestCreationSteps);


    /*
    *
    * CHAT SAGA MW
    *
    * */
    //CHAT
    yield takeLatest(ACTION_TYPES.USER_AUTHORIZATION_RESPONSE, chatSaga.getUserChatsSaga);
    yield takeLatest(CHAT_ACTION_TYPES.GET_CHAT_ACTION, chatSaga.getChatSaga);
    yield takeLatest(CHAT_ACTION_TYPES.CREATE_CHAT_ACTION, chatSaga.createChatSaga);

    //PARTICIPANT
    yield takeLatest(CHAT_ACTION_TYPES.GET_PARTICIPANTS_ACTION, chatSaga.getParticipantsSaga);

    //MESSAGE
    yield takeLatest(CHAT_ACTION_TYPES.GET_MESSAGES_ACTION, chatSaga.getMessagesSaga);
    yield takeLatest(CHAT_ACTION_TYPES.GET_MESSAGE_ACTION, chatSaga.getMessageSaga);
    /*
    * PARTICIPANT
    * */
}

export default rootSaga;
