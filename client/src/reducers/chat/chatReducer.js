import CHAT_ACTION_TYPES from "../../actions/actionTypes/chatActionTypes";
import _ from 'lodash';

const initialState = {
    messages: null,
    isFetching: false,
    error: null,
};

 function chatReducer(state = initialState, action) {

    switch (action.type) {
        case CHAT_ACTION_TYPES.GET_USER_CHATS_REQUEST:{

            return _.cloneDeep({
                ...state,
                isFetching: true,
            });
        }
        case CHAT_ACTION_TYPES.GET_USER_CHATS_RESPONSE:{
            return _.cloneDeep({
                ...state,
                messages: action.messages,
            });
        }
        case CHAT_ACTION_TYPES.GET_USER_CHATS_ERROR: {
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

export default chatReducer;