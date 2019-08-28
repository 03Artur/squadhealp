import {put, all, call} from 'redux-saga/effects';
import CHAT_ACTION_TYPES from "../actions/actionTypes/chatActionTypes";
import {loginUser} from "../api/rest/authorizationController";
import * as chatController from '../api/socket/chatController'


export function* selectChatRoomSaga({room}) {

    try {
    } catch (e) {

    }
}

export function* sendMessageSaga({room, message}) {

    try {
        yield chatController.sendMessage(room, message);
    } catch (e) {
        yield put({
            type: CHAT_ACTION_TYPES.SEND_MESSAGE_ERROR,
            error: {}
        })
    }
}

