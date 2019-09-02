import CHAT_ACTION_TYPES from "../../actions/actionTypes/chatActionTypes";
import _ from 'lodash';

const initialState = {
    chatId: null,
};

 function chatReducer(state = initialState, action) {

    switch (action.type) {
        case CHAT_ACTION_TYPES.SELECT_CHAT_ACTION:{

            return _.clone({
                ...state,
                chatId: action.chatId,
            })
        }
        case CHAT_ACTION_TYPES.UNSELECT_CHAT_ACTION: {
            return {
                chatId: null
            }
        }

        default: {
            return state;
        }
    }
}

export default chatReducer;