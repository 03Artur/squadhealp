import {put, all, call} from 'redux-saga/effects';
import CHAT_ACTION_TYPES from "../actions/actionTypes/chatActionTypes";
import {loginUser} from "../api/rest/authorizationController";
import * as chatController from '../api/socket/chatController'




export function* sendMessageSaga({room, data}) {

    try {
        yield chatController.sendMessage(room, data);
    } catch (e) {
        yield put({
            type: CHAT_ACTION_TYPES.SEND_MESSAGE_ERROR,
            error: {}
        })
    }
}

export function* selectChatRoomSaga({room}) {
    try {
        yield put({
            type: CHAT_ACTION_TYPES.GET_USER_CHATS_RESPONSE,
            room: room,
            members: [

                {
                    id: 1,
                    firstName: "Name",
                    lastName: "Surname",
                    profilePicture: null,
                },
            ],
            messages: [
                {
                    authorId: 1,
                    value: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis distinctio dolore dolores Expedita.",
                    timestamp: '15:17',
                },
                {
                    authorId: 1,
                    value: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis distinctio dolore dolores Expedita.",
                    timestamp: '15:17',
                },
                {
                    authorId: 1,
                    value: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis distinctio dolore dolores Expedita.",
                    timestamp: '15:17',
                },
                {
                    authorId: 1,
                    value: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis distinctio dolore dolores Expedita.",
                    timestamp: '15:17',
                },
                {
                    authorId: 1,
                    value: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis distinctio dolore dolores Expedita.",
                    timestamp: '15:17',
                },
            ]
        })
    }catch (e) {

    }
}

