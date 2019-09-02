import {put, all, call} from 'redux-saga/effects';
import CHAT_ACTION_TYPES from "../actions/actionTypes/chatActionTypes";
import * as chatController from '../api/rest/chatController';
import queryString from 'queryString';

/*
* CHAT
* */

//GET USER CHATS
export function* getUserChatsSaga() {
    try {
        yield put({
            type: CHAT_ACTION_TYPES.GET_CHATS_REQUEST,
        });

        const {data: {chats, participants}} = yield chatController.getUserChats();


        yield all([

            put({
                type: CHAT_ACTION_TYPES.GET_CHAT_RESPONSE,
                chats,
            }),
            put({
                type: CHAT_ACTION_TYPES.GET_PARTICIPANTS_RESPONSE,
                participants,
            })

        ])


    } catch (e) {
        yield put({
            type: CHAT_ACTION_TYPES.GET_CHATS_ERROR,
            error: e.response.error,
        })
    }
}
//CREATE CHAT
export function* createChatSaga({chat}) {
    try {
        yield put({
            type: CHAT_ACTION_TYPES.CREATE_CHAT_REQUEST,
        });

        const {data} = yield chatController.postChat(chat);

        yield put({
            type: CHAT_ACTION_TYPES.CREATE_CHAT_RESPONSE,
            chat: data,
        })


    }catch (e) {
        yield put({
            type: CHAT_ACTION_TYPES.CREATE_CHAT_ERROR,
            error: e.response.data,
        })
    }
}
//SELECT CHAT

//GET CHAT
export function* getChatSaga({chatId}) {
    try{
        yield put({
            type: CHAT_ACTION_TYPES.GET_CHAT_REQUEST,
        });
        const {data} = yield chatController.getChat(chatId);

        yield put({
            type: CHAT_ACTION_TYPES.GET_CHAT_RESPONSE,
            chat: data,
        })

    }catch (e) {
        yield put({
            type: CHAT_ACTION_TYPES.GET_CHAT_ERROR,
            error: e.response.data,
        })
    }
}



/*
* PARTICIPANTS
* */
export function* getParticipantsSaga({query}) {
    try {
        yield put({
           type: CHAT_ACTION_TYPES.GET_PARTICIPANTS_REQUEST,
        });

        const {data} = yield chatController.getParticipants(queryString.stringify(query));

        yield put({
            type: CHAT_ACTION_TYPES.GET_PARTICIPANTS_RESPONSE,
            participants: data,
        })


    } catch (e) {
        yield put({
            type: CHAT_ACTION_TYPES.GET_PARTICIPANTS_ERROR,
            error: e.response.data,
        })
    }
}


/*
*
* MESSAGE
* */

export function* getMessageSaga({data}) {

    try {

    } catch (e) {

    }
    console.group('MESSAGE');
    console.log(data);
    console.groupEnd();
}

/*
* =================================================================
* */
export function* startChatSaga({participants: members}) {
    try {
        yield put({
            type: CHAT_ACTION_TYPES.START_CHAT_REQUEST,
        });
        const {data: chat} = yield createChat(members);
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
    } catch (e) {
        yield put({
            type: CHAT_ACTION_TYPES.START_CHAT_ERROR,
            error: e.response.data,
        })
    }
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
    } catch (e) {

    }
}

