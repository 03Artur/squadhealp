import CHAT_ACTION_TYPES from "../../actionTypes/chatActionTypes";

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

export function startChatActionCreator(participants) {
    return {
        type: CHAT_ACTION_TYPES.START_CHAT_ACTION,
        participants,
    }
}


