import CHAT_ACTION_TYPES from "../../actionTypes/chatActionTypes";

/*
* CHAT
* */
export function createChatActionCreator(chat) {
    return {
        type: CHAT_ACTION_TYPES.CREATE_CHAT_ACTION,
        chat,
    }
}

export function getChatActionCreator(chatId) {
    return {
        type: CHAT_ACTION_TYPES.GET_CHAT_ACTION,
        chatId,
    }
}
export function getUserChatsActionCreate() {
    return {
        type: CHAT_ACTION_TYPES.GET_USER_CHATS_ACTION,
    }
}

/*
* PARTICIPANTS
* */

/*
* MESSAGE
* */








//================================================
export function sendMessageActionCreator(room, data) {
    return {
        type: CHAT_ACTION_TYPES.SEND_MESSAGE_ACTION,
        room,
        data
    }
}

export function selectChatRoomActionCreator(room) {
    console.group("selectChatRoomActionCreator");
    console.log(room);
    console.groupEnd();
    return {
        type: CHAT_ACTION_TYPES.SELECT_CHAT_ROOM_ACTION,
        room,
    }
}

export function searchChatRoomActionCreator(searchValue) {
    console.group("searchChatRoomActionCreator");
    console.log(searchValue);
    console.groupEnd();
    return {
        type: CHAT_ACTION_TYPES.SEARCH_CHAT_ROOM_ACTION,
        searchValue,
    }
}

export function cancelSearchChatRoomActionCreator() {
    return {
        type: CHAT_ACTION_TYPES.CANCEL_SEARCH_CHAT_ROOM_ACTION,
    }
}






