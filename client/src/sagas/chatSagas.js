import {put, all, call, select} from 'redux-saga/effects';
import CHAT_ACTION_TYPES from "../actions/actionTypes/chatActionTypes";
import * as chatController from '../api/rest/chatController';
import queryString from 'query-string';
import _ from 'lodash';
import io from 'socket.io-client';
import {chatSocketHelper} from "../api/socket";
import {baseURL} from "../api/baseURL";
import CONTEST_ACTION_TYPES from "../actions/actionTypes/contestActionTypes";
import chatsParticipantsReducer from "../reducers/chat/chatsParticipantsReducer";

/*
* CHAT
* */

//GET USER CHATS WITH LAST MESSAGE AND MESSAGES AUTHORS
export function* getUserChatsSaga({user}) {
    if (user) {
        //open socket connection
        chatSocketHelper.socket = io(`${baseURL}?userId=${user.id}`);
        try {
            yield put({
                type: CHAT_ACTION_TYPES.GET_CHATS_REQUEST,
            });
            const {data: {chats, participants}} = yield chatController.getUserChats();

            yield all([
                put({
                    type: CHAT_ACTION_TYPES.GET_PARTICIPANTS_RESPONSE,
                    participants,
                }),
                put({
                    type: CHAT_ACTION_TYPES.GET_CHATS_RESPONSE,
                    chats,
                }),

            ]);
        } catch (e) {
            yield put({
                type: CHAT_ACTION_TYPES.GET_CHATS_ERROR,
                error: e.response.data,
            })
        }
    }
}

//FIND AND JOIN
export function* joinToChatSaga({chatId}) {
    yield put({
        type: CHAT_ACTION_TYPES.GET_CHAT_REQUEST,
    });
    try {
        const {data} = yield chatController.joinToChat(chatId);

        const {messages} = data;

        yield call(getParticipantsSaga({participantsIds: messages.map(message => message.authorId)}));

        yield all([
                put({
                    type: CHAT_ACTION_TYPES.GET_CHAT_RESPONSE,
                    chat: data,
                }),
                put({
                    type: CHAT_ACTION_TYPES.SELECT_CHAT_ACTION,
                    chatId: data._id,
                })
            ]
        )


    } catch (e) {
        yield put({
            type: CHAT_ACTION_TYPES.GET_CHAT_ERROR,
            error: e.response.data,
        })
    }
}

//CREATE CHAT
export function* createChatSaga({chat}) {
    alert('createChatSaga');
    yield put({
        type: CHAT_ACTION_TYPES.CREATE_CHAT_REQUEST,
    });
    try {
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

//CREATE TASK CHAT SAGA
export function* createTaskChatSaga({taskId}) {
    yield put({
        type: CHAT_ACTION_TYPES.CREATE_CHAT_REQUEST,
    });
    try {
        const {data} = yield chatController.createTaskChat(taskId);
        console.log(data);
        yield all([
            put({
                type: CONTEST_ACTION_TYPES.CREATE_TASK_CHAT_RESPONSE,
                chat: data.chat,
                contest: data.task,
            }),
            put({
                type: CHAT_ACTION_TYPES.CREATE_CHAT_RESPONSE,
                chat: data.chat,
            }),
        ]);

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
        if (chat) {
            const {messages} = chat;
            if (messages) {
                yield call(getParticipantsSaga, {participantsIds: messages.map(message => message.authorId)})
            }
        }

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
export function* getParticipantsSaga({participantsIds}) {
    try {
        yield put({
            type: CHAT_ACTION_TYPES.GET_PARTICIPANTS_REQUEST,
        });
        const {participants} = yield select(getParticipants);

        const participantsKeys = [...participants.keys()];
        const missingParticipantsIds = _.difference(participantsIds, participantsKeys);

        if (missingParticipantsIds.length) {
            const {data} = yield chatController.getParticipants(queryString.stringify({id: missingParticipantsIds}));

            yield put({
                type: CHAT_ACTION_TYPES.GET_PARTICIPANTS_RESPONSE,
                participants: data,
            })
        }

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

//POST MESSAGE
export function* postMessageSaga({chatId, message}) {
    yield put({
        type: CHAT_ACTION_TYPES.POST_MESSAGE_REQUEST,
    });
    try {

        const {data} = yield chatController.postMessage(chatId, message);
        yield chatSocketHelper.postMessage(chatId, data._id);
        yield put({
            type: CHAT_ACTION_TYPES.POST_MESSAGE_RESPONSE,
            message: data,
        })


    } catch (e) {
        yield put({
            type: CHAT_ACTION_TYPES.POST_MESSAGE_ERROR,
            error: e.response.data,
        });

    }
}


/*
*
* MESSAGE
* */

export function* getMessagesSaga({chatId, query}) {

    yield put({
        type: CHAT_ACTION_TYPES.GET_MESSAGES_REQUEST,
        chatId,
    });

    try {
        const {data: messages} = yield chatController.getMessages(chatId, queryString.stringify(query));


        yield call(getParticipantsSaga({participantsIds: messages.map(message => message.authorId)}));

        yield put({
            type: CHAT_ACTION_TYPES.GET_MESSAGES_RESPONSE,
            messages,
            chatId,
        });

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
            chatId,
        });

        const {data: message} = yield chatController.getMessage(chatId, messageId);

        yield call(getParticipantsSaga, {participantsIds: [message.authorId]});

        yield put({
            type: CHAT_ACTION_TYPES.GET_MESSAGE_RESPONSE,
            message: message,
        })
    } catch (e) {
        yield put({
            type: CHAT_ACTION_TYPES.GET_MESSAGE_ERROR,
            error: e.response.data,
        });
    }
}


//UTILS
const getParticipants = state => state.chatsParticipantsReducer;


