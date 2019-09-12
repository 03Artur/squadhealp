import CHAT_ACTION_TYPES from "../../actions/actionTypes/chatActionTypes";
import _ from 'lodash';

const initialState = {
    messages: new Map(),
};


export default function (state = initialState, action) {

    switch (action.type) {
        case CHAT_ACTION_TYPES.GET_CHATS_RESPONSE: {
            const {chats} = action;
            const messages = new Map();
            chats.forEach(chat => {
                messages.set(chat._id, chat.messages);
            });
            return {
                messages: messages,
            }
        }

        case CHAT_ACTION_TYPES.GET_CHAT_RESPONSE: {
            const clonedState = _.cloneDeep(state);
            clonedState.messages.set(action.chat._id, action.chat.messages);
            return clonedState;
        }

        case CHAT_ACTION_TYPES.GET_MESSAGE_RESPONSE: {

            const clonedState = _.cloneDeep(state);
            const messageArr = clonedState.messages.get(action.message.chatId);
            messageArr.push(action.message);
            return clonedState;
        }
        case CHAT_ACTION_TYPES.GET_MESSAGES_RESPONSE: {
            const clonedState = _.cloneDeep(state);
            const messageArr = clonedState.messages.get(action.chatId);
            const newMessages = [...messageArr, ...action.messages];
            clonedState.messages.set(action.chatId, newMessages);
            return clonedState;
        }

        default: {
            return state;
        }
    }

}
