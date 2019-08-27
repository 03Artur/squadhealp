import ACTION_TYPES from "../../actions/actiontsTypes";
import _ from 'lodash';

const initialState = {
    limit: 20,
    offset: 0,
};

export default function (state = initialState, action) {

    switch (action.type) {

        case ACTION_TYPES.GET_USER_CHATS_RESPONSE:{
            return _.cloneDeep({
                offset: state.offset + action.messages.length,
            });
        }


        default: {
            return state;
        }

    }

}

