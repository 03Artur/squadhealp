import CHAT_ACTION_TYPES from "../../actions/actionTypes/chatActionTypes";
import _ from 'lodash';


const initialState = {
    chats: new Map(),
    isFetching: false,
    error: null,

};

export default function (state = initialState, action) {

    switch (action.type) {


        case CHAT_ACTION_TYPES.GET_CHATS_REQUEST:
        case CHAT_ACTION_TYPES.GET_CHAT_REQUEST: {
            return {
                ...state,
                isFetching: true,
            };
        }

        case CHAT_ACTION_TYPES.GET_CHATS_RESPONSE: {
            const chats = new Map();
            action.chats.forEach((messages, ...chat) => chats.set(chat._id, chat));
            const clonedState = _.cloneDeep(state);
            clonedState.chats = chats;
            return ({
                ...clonedState,
                isFetching: true,
            });
        }
        case CHAT_ACTION_TYPES.GET_CHAT_RESPONSE : {
            const clonedState = _.cloneDeep(state);
            const {messages, ...chat} = action.chat;
            clonedState.chats.set(chat._id, chat);
            clonedState.isFetching = false;
            return clonedState;
        }
        case CHAT_ACTION_TYPES.GET_CHATS_ERROR:
        case CHAT_ACTION_TYPES.GET_CHAT_ERROR: {
            return _.cloneDeep({
                ...state,
                error: action.error
            })
        }


        default: {
            return state;
        }
    }
}

