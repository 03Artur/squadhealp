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

export function createTaskChatActionCreator(taskId) {
    return {
        type: CHAT_ACTION_TYPES.CREATE_TASK_CHAT_ACTION,
        taskId,
    }
}

export function selectChatActionCreator(chatId) {
    return {
        type: CHAT_ACTION_TYPES.SELECT_CHAT_ACTION,
        chatId,
    }
}

export function joinToChatActionCreator(chatId) {
    return {
        type: CHAT_ACTION_TYPES.JOIN_TO_CHAT_ACTION,
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

export function postMessageActionCreator(chatId, message) {
    return {
        type: CHAT_ACTION_TYPES.POST_MESSAGE_ACTION,
        chatId,
        message,
    }
}


export function getMessagesActionCreator(chatId, query) {
    return {
        type: CHAT_ACTION_TYPES.GET_MESSAGES_ACTION,
        chatId,
        query,
    }
}

export function getMessageActionCreator(chatId,messageId) {
    return {
        type: CHAT_ACTION_TYPES.GET_MESSAGE_ACTION,
        chatId,
        messageId,
    }
}


//================================================


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






