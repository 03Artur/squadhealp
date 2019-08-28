import CHAT_ACTION_TYPES from "../actionTypes/chatActionTypes";

export function sendMessageActionCreator({room,data}){
    return {
        type: CHAT_ACTION_TYPES.SEND_MESSAGE_ACTION,
        room,
        data
    }
}

export function selectChatRoomActionCreator(room) {
    return {
        type: CHAT_ACTION_TYPES.SELECT_CHAT_ROOM_ACTION,
        room,
    }
}
