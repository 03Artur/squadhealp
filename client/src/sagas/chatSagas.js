import {put, all, call} from 'redux-saga/effects';
import CHAT_ACTION_TYPES from "../actions/actionTypes/chatActionTypes";
import {loginUser} from "../api/rest/authorizationController";
import {createChat} from "../../../server/src/server/controllers/chatController";

export function* startChatSaga({participants: members}) {
    try {
        yield put({
            type: CHAT_ACTION_TYPES.START_CHAT_REQUEST,
        });
        const {data:chat} =yield createChat(members);
        const participantsMap = new Map();
/*
        participants.forEach(user => participants.set(user.id,user));
*/
        yield put({
            type: CHAT_ACTION_TYPES.START_CHAT_RESPONSE,
            room: chat.id,
            members: participantsMap,
            messages: [],
        })
    }
    catch (e) {
            yield put({
                type: CHAT_ACTION_TYPES.START_CHAT_ERROR,
                error: e.response.data,
            })
    }
}




export function* getMessageSaga({data}) {

    try {

    }
    catch (e) {

    }
    console.group('MESSAGE');
    console.log(data);
    console.groupEnd();
}

export function* sendMessageSaga({chatId, message}) {

    try {



    } catch (e) {
        yield put({
            type: CHAT_ACTION_TYPES.SEND_MESSAGE_ERROR,
            error: e.response.data,
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
                    profilePicture: 'user1.jpeg',
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

