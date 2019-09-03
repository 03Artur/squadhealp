import io from 'socket.io-client';
import {SOCKET_EVENTS} from "../../constants";
import store from "../../store";
import CHAT_ACTION_TYPES from "../../actions/actionTypes/chatActionTypes";
import {getChatActionCreator, getMessageActionCreator} from "../../actions/actionCreators/chatActionCreators";
import {baseURL} from "../baseURL";

const socket = io(baseURL, {
    autoConnect: false,
});

export const authorizeUser = (userId) => socket.emit(SOCKET_EVENTS.AUTHORIZE_USER, userId);

//CHAT
export const postChat = chatId => {
    console.log('socket post chat');
    socket.emit(SOCKET_EVENTS.POST_CHAT, chatId)
};
socket.on(SOCKET_EVENTS.GET_CHAT, chatId => {
    console.log('socket get chat');
    store.dispatch(getChatActionCreator(chatId))
});

//MESSAGE
socket.on(SOCKET_EVENTS.GET_MESSAGE, messageId => store.dispatch(getMessageActionCreator(messageId)));

export const postMessage = (chatId, messageId) => socket.emit(SOCKET_EVENTS.POST_MESSAGE, {chatId, messageId});

export const sendTypingMessage = (userId) => socket.emit(SOCKET_EVENTS.TYPING, userId);
export const stopTypingMessage = user => socket.emit(SOCKET_EVENTS.STOP_TYPING, user);


//NOTIFICATIONS
socket.on(SOCKET_EVENTS.NOTIFY_TYPING, userId => store.dispatch({
    type: CHAT_ACTION_TYPES.NOTIFY_TYPING_ACTION,
    userId,
}));

socket.on(SOCKET_EVENTS.NOTIFY_STOP_TYPING, userId => store.dispatch({
    type: CHAT_ACTION_TYPES.NOTIFY_STOP_TYPING_ACTION,
    userId,
}));

export const openSocket = () => new Promise(resolve => resolve(socket.open()));