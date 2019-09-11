import {SOCKET_EVENTS} from "../../constants";
import store from "../../store";
import {getChatActionCreator, getMessageActionCreator} from "../../actions/actionCreators/chatActionCreators";
import {onGetChat, onGetMessage} from "./chatController";

export default class ChatSocketHelper {

    static addEventHandler(socket){
        socket.on(SOCKET_EVENTS.GET_CHAT, onGetChat);
        socket.on(SOCKET_EVENTS.GET_MESSAGE, onGetMessage);

    }

    open(){
        this.socket.open()
    }
    get socket() {
        return this._socket;
        ChatSocketHelper.addEventHandler(this.socket);
    }
    set socket(socket) {
        this._socket = socket;
        ChatSocketHelper.addEventHandler(socket);
    }
    postChat(chatId) {
        this.socket.emit(SOCKET_EVENTS.POST_CHAT, chatId);
    }
    postMessage(messageId){
        this.socket.emit(SOCKET_EVENTS.POST_MESSAGE,messageId);
    }
    postJoinToChat(chatId){
        this.socket.emit(SOCKET_EVENTS.JOIN_TO_CHAT,chatId);
    }

}



