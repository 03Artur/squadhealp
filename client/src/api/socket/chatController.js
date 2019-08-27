import io from 'socket.io';
import {SOCKET_EVENTS} from "../../constants";
import store from "../../store";
import ACTION_TYPES from "../../actions/actiontsTypes";

const socket = io();


export const sendMessage = message => socket.emit(SOCKET_EVENTS.CHAT_MESSAGE, message);
socket.on(SOCKET_EVENTS.RECEIVED_MESSAGE, data => store.dispatch({
    type: ACTION_TYPES.MESSAGE_RECEIVED_ACTION,
    message: data
}));

export const sendTypingMessage = user => socket.emit(SOCKET_EVENTS.TYPING, user);
socket.on(SOCKET_EVENTS.NOTIFY_TYPING, data => store.dispatch({
    type: ACTION_TYPES.NOTIFY_TYPING_ACTION,
    data: data,
}));

export const stopTypingMessage = user => socket.emit(SOCKET_EVENTS.STOP_TYPING,user);
socket.on(SOCKET_EVENTS.NOTIFY_STOP_TYPING, data => store.dispatch({
    type: ACTION_TYPES.NOTIFY_TYPING_STOP_ACTION,
    data: data,
}));



