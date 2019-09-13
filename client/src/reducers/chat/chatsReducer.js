import CHAT_ACTION_TYPES from "../../actions/actionTypes/chatActionTypes";
import _ from 'lodash';


const initialState = {
    chats: null,
    isFetching: false,
    error: null,
};

function chatsReducer(state = initialState, action) {

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
            action.chats.forEach(({messages, ...chat}) => chats.set(chat._id, chat));
            return ({
                ...state,
                chats,
                isFetching: true,
            });
        }

        case CHAT_ACTION_TYPES.CREATE_CHAT_RESPONSE:
        case CHAT_ACTION_TYPES.GET_CHAT_RESPONSE : {
            const {messages, ...chat} = action.chat;

            return ({
                ...state,
                chats: state.chats.set(chat._id, chat),
                isFetching: false,
            });
        }

        case CHAT_ACTION_TYPES.GET_CHATS_ERROR:
        case CHAT_ACTION_TYPES.GET_CHAT_ERROR: {
            return _.cloneDeep({
                ...state,
                error: action.error,
            })
        }

        default: {
            return state;
        }
    }
}

export default chatsReducer;
