import io from 'socket.io-client';
import {SOCKET_EVENTS} from "../../constants";
import store from "../../store";
import CHAT_ACTION_TYPES from "../../actions/actionTypes/chatActionTypes";
import {getChatActionCreator, getMessageActionCreator} from "../../actions/actionCreators/chatActionCreators";





const socket = io('http://localhost:3000');

export const authorizeUser = (userId) => socket.emit(SOCKET_EVENTS.AUTHORIZE_USER,userId);


socket.on(SOCKET_EVENTS.JOIN_ME_TO_ROOMS, data => store.dispatch({
    type: CHAT_ACTION_TYPES.GET_USER_CHATS_RESPONSE,
    data
}));

//CHAT
socket.on(SOCKET_EVENTS.RECEIVED_CHAT, chatId => store.dispatch(getChatActionCreator(chatId)));

//MESSAGE
socket.on(SOCKET_EVENTS.RECEIVED_MESSAGE, messageId => store.dispatch(getMessageActionCreator(messageId)));

export const sendTypingMessage = (userId) => socket.emit(SOCKET_EVENTS.TYPING, userId);
export const stopTypingMessage = user => socket.emit(SOCKET_EVENTS.STOP_TYPING,user);
//PARTICIPANTS




socket.on(SOCKET_EVENTS.NOTIFY_TYPING, userId => store.dispatch({
    type: CHAT_ACTION_TYPES.NOTIFY_TYPING_ACTION,
    userId,
}));


socket.on(SOCKET_EVENTS.NOTIFY_STOP_TYPING, userId => store.dispatch({
    type: CHAT_ACTION_TYPES.NOTIFY_STOP_TYPING_ACTION,
    userId,
}));



