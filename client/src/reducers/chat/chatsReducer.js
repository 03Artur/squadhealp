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
            const clonedState = _.cloneDeep(state);
            clonedState.isFetching = true;
            return clonedState;
        }
        case CHAT_ACTION_TYPES.GET_CHATS_RESPONSE: {
            const chats = new Map();
            action.chats.forEach(chat => chats.set(chat._id, chat));
            return _.cloneDeep({
                ...state,
                chats: chats,
                isFetching: true,
            });
        }
        case CHAT_ACTION_TYPES.GET_CHAT_RESPONSE: {
            const clonedState = _.cloneDeep(state);
            clonedState.chats.set(action.chat._id, action.chat);
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

