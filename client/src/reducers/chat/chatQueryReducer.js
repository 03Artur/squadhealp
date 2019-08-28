
import CHAT_ACTION_TYPES from "../../actions/actionTypes/chatActionTypes";
import _ from 'lodash';

const initialState = {
    limit: 20,
    offset: 0,
};

function chatQueryReducer(state = initialState, action) {

    switch (action.type) {

        case CHAT_ACTION_TYPES.GET_USER_CHATS_RESPONSE:{
            return _.cloneDeep({
                offset: state.offset + action.messages.length,
            });
        }


        default: {
            return state;
        }

    }
}

export default chatQueryReducer;
