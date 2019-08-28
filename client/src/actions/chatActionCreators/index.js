import ACTION_TYPES from "../actiontsTypes";

export function sendMessageActionCreator({room,message,user}){
    return {
        type: ACTION_TYPES.SEND_MESSAGE_ACTION,
        room,
        message,
        user,
    }
}


