import CHAT_ACTION_TYPES from "../../actions/actionTypes/chatActionTypes";
import _ from 'lodash';

const initialState = {
    members: null,
    messages: null,
    room: null,
    isFetching: false,
    error: null,
};

 function chatReducer(state = initialState, action) {

    switch (action.type) {
        case CHAT_ACTION_TYPES.START_CHAT_REQUEST:
        case CHAT_ACTION_TYPES.GET_CHAT_DATA_REQUEST:{

            return _.cloneDeep({
                ...state,
                isFetching: true,
            });
        }
        case CHAT_ACTION_TYPES.START_CHAT_RESPONSE:
        case CHAT_ACTION_TYPES.GET_CHAT_DATA_RESPONSE:{
            return _.cloneDeep({
                ...state,
                room: action.room,
                members: action.members,
                messages: action.messages,
            });
        }
        case CHAT_ACTION_TYPES.GET_CHAT_DATA_ERROR: {
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