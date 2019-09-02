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
export function selectChatActionCreator(chatId) {
    return {
        type: CHAT_ACTION_TYPES.SELECT_CHAT_ACTION,
        chatId,
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
        type: CHAT_ACTION_TYPES.GET_CHATS_ACTION,
    }
}



export function unselectChatActionCreator() {
    return {
        type: CHAT_ACTION_TYPES.UNSELECT_CHAT_ACTION,
    }
}

/*
* PARTICIPANTS
* */

/*
* MESSAGE
* */

export function postMessageActionCreator(message) {
    return {
        type: CHAT_ACTION_TYPES.
    }
}


export function getMessagesActionCreator(chatId, query) {
    return {
        type: CHAT_ACTION_TYPES.GET_MESSAGES_ACTION,
        chatId,
        query,
    }
}

export function getMessageActionCreator(chatId, messageId) {
    return {
        type: CHAT_ACTION_TYPES.GET_MESSAGE_ACTION,
        chatId,
        messageId,
    }
}


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






