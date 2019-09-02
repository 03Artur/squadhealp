import CHAT_ACTION_TYPES from "../../actions/actionTypes/chatActionTypes";
import _ from 'lodash';

const initialState = {
    participants: new Map(),
    isFetching: true,
};

export default function (state = initialState, action) {

    switch (action.type) {

        case CHAT_ACTION_TYPES.GET_AUTHORS_REQUEST: {

            return {
                ...state,
                isFetching: true,
            }
        }

        case CHAT_ACTION_TYPES.GET_AUTHORS_RESPONSE: {

            const clonedState = _.cloneDeep(state);
            action.participants.forEach(item => {
                clonedState.participants.set(item.id, item);
            });

            return _.cloneDeep({
                ...state,
                participants
            })
        }

        case CHAT_ACTION_TYPES.GET_AUTHORS_ERROR: {

            const clonedState = _.cloneDeep(state);

            return {
                ...clonedState,
                error: action.error,
            }
        }
        default: {
            return state;
        }

    }

}

