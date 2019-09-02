import {put, all, call, select} from 'redux-saga/effects';
import CHAT_ACTION_TYPES from "../actions/actionTypes/chatActionTypes";
import * as chatController from '../api/rest/chatController';
import queryString from 'queryString';
import _ from 'lodash';

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


    } catch (e) {
        yield put({
            type: CHAT_ACTION_TYPES.CREATE_CHAT_ERROR,
            error: e.response.data,
        })
    }
}
//SELECT CHAT

//GET CHAT
export function* getChatSaga({chatId}) {
    try {
        yield put({
            type: CHAT_ACTION_TYPES.GET_CHAT_REQUEST,
        });
        const {data: chat} = yield chatController.getChat(chatId);

        yield put({
            type: CHAT_ACTION_TYPES.GET_CHAT_RESPONSE,
            chat,
        })

    } catch (e) {
        yield put({
            type: CHAT_ACTION_TYPES.GET_CHAT_ERROR,
            error: e.response.data,
        })
    }
}


/*
* PARTICIPANTS
* */

//GET PARTICIPANTS
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

//GET PARTICIPANT
export function* getParticipantSaga({id}) {

    try {
        yield put({
            type: CHAT_ACTION_TYPES.GET_PARTICIPANT_REQUEST,
        });

        const {data: participant} = yield chatController.getParticipant(id);

        yield put({
            type: CHAT_ACTION_TYPES.GET_PARTICIPANT_RESPONSE,
            participant,
        })

    } catch (e) {
        yield put({
            type: CHAT_ACTION_TYPES.GET_PARTICIPANT_ERROR,
            error: e.response.data,
        })
    }

}


/*
*
* MESSAGE
* */

export function* getMessagesSaga({chatId, query}) {

    yield put({
        type: CHAT_ACTION_TYPES.GET_MESSAGES_REQUEST,
    });

    try {
        const {data: messages} = yield chatController.getMessages(chatId, queryString.stringify(query));
        const effects = [
            put({
                type: CHAT_ACTION_TYPES.GET_MESSAGES_RESPONSE,
                messages,
            }),
        ];

        const {participants} = yield select(getParticipants);
        const missingParticipantsIds = _.difference(messages.map(message => message.authorId), [...participants.keys()]);

        if (missingParticipantsIds.length) {
            effects.push(call(getParticipantsSaga, {
                query: {
                    id: missingParticipantsIds,
                }
            }))
        }

        yield all(effects);

    } catch (e) {
        yield put({
            type: CHAT_ACTION_TYPES.GET_MESSAGES_ERROR,
            error: e.response.data,
        })
    }
}

export function* getMessageSaga({chatId, messageId}) {
    try {
        yield put({
            type: CHAT_ACTION_TYPES.GET_MESSAGE_REQUEST,
        });

        const {data: message} = yield chatController.getMessage(chatId, messageId);

        const effects = [
            put({
                type: CHAT_ACTION_TYPES.GET_MESSAGE_RESPONSE,
                message: message,
            })
        ];
        const {participants} = yield select(getParticipants);
        const author = participants.get(message.authorId);
        if (!author) {
            effects.push(
                call(getParticipantSaga, {id: message.authorId})
            )
        }

        yield all(effects);

    } catch (e) {
        yield put({
            type: CHAT_ACTION_TYPES.GET_MESSAGE_ERROR,
            error: e.response.data,
        });
    }
}


//UTILS
const getParticipants = state => state.chatsParticipants;


