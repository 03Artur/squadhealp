import CHAT_ACTION_TYPES from "../actionTypes/chatActionTypes";

export function sendMessageActionCreator({room,message,user}){
    return {
        type: CHAT_ACTION_TYPES.SEND_MESSAGE_ACTION,
        room,
        message,
        user,
    }
}

export function selectChatRoomActionCreator(room) {
    return {
        type: CHAT_ACTION_TYPES.SELECT_CHAT_ROOM_ACTION,
        room,
    }
}
