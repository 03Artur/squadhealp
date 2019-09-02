import CHAT_ACTION_TYPES from "../../actions/actionTypes/chatActionTypes";
import _ from 'lodash';

const initialState = {
    queries: new Map(),
};

const defaultLimit = 20;

function chatsQueryReducer(state = initialState, action) {

    switch (action.type) {

        case CHAT_ACTION_TYPES.GET_CHATS_RESPONSE: {
            const queries = new Map();

            action.chats.forEach(chat => {
                queries.set(chat._id, {
                    limit: defaultLimit,
                    skip: chat.messages.length,
                })
            });

            return {
                queries: queries,
            }
        }
        case CHAT_ACTION_TYPES.GET_MESSAGES_RESPONSE: {
            const clonedState = _.cloneDeep(state);
            const query = clonedState.queries.get(action.chatId);
            query.skip += action.messages.length;
            return clonedState;
        }

        case CHAT_ACTION_TYPES.GET_MESSAGE_RESPONSE: {
            const clonedState = _.cloneDeep(state);
            const query = clonedState.queries.get(action.message.chatId);
            query.skip++;
            return clonedState;
        }


        default: {
            return state;
        }

    }
}

export default chatsQueryReducer;
