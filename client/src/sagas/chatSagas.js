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
            type: CHAT_ACTION_TYPES.GET_CHAT_DATA_RESPONSE,
            room: room,
            members: [

                {
                    id: 1,
                    firstName: "Name",
                    lastName: "Surname",
                    profilePicture: null,
                },
                {
                    id: 2,
                    firstName: "React",
                    lastName: "Telegramovich",
                    profilePicture: 'user2.jpg',
                },
            ],
            messages: [
                {
                    authorId: 1,
                    value: "1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis distinctio dolore dolores Expedita.",
                    timestamp: '15:17',
                },
                {
                    authorId: 1,
                    value: "2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis distinctio dolore dolores Expedita.",
                    timestamp: '14:17',
                },
                {
                    authorId: 2,
                    value: "3. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis distinctio dolore dolores Expedita.",
                    timestamp: '13:17',
                },
                {
                    authorId: 1,
                    value: "4. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis distinctio dolore dolores Expedita.",
                    timestamp: '12:17',
                },
                {
                    authorId: 1,
                    value: "5. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis distinctio dolore dolores Expedita.",
                    timestamp: '11:17',
                },
            ]
        })
    }catch (e) {

    }
}

