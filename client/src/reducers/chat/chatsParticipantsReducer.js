import CHAT_ACTION_TYPES from "../../actions/actionTypes/chatActionTypes";
import _ from 'lodash';

const initialState = {
    participants: new Map(),
    isFetching: true,
};

export default function (state = initialState, action) {

    switch (action.type) {

        //LOADING
        case CHAT_ACTION_TYPES.GET_PARTICIPANT_REQUEST:
        case CHAT_ACTION_TYPES.GET_PARTICIPANTS_REQUEST: {

            return {
                ...state,
                isFetching: true,
            }
        }

        //ADDING PARTICIPANTS
        case CHAT_ACTION_TYPES.GET_PARTICIPANTS_RESPONSE: {

            const participants = _.cloneDeep(state.participants);
            action.participants.forEach(item => {
                participants.set(item.id, item);
            });
            return _.cloneDeep({
                ...state,
                participants,
                isFetching: false,
            });
        }

        //ADDING ONE PARTICIPANT
        case CHAT_ACTION_TYPES.GET_PARTICIPANT_RESPONSE: {

            const clonedState = _.cloneDeep(state);
            clonedState.participants.set(action.participant.id, action.participant);
            clonedState.isFetching = false;
            return clonedState;
        }

        //REQUEST ERRORS
        case CHAT_ACTION_TYPES.GET_PARTICIPANTS_ERROR:
        case CHAT_ACTION_TYPES.GET_PARTICIPANT_ERROR: {


            return _.cloneDeep({
                ...state,
                error: action.error,
               isFetching: false,

            })
        }

        default: {
            return state;
        }
    }
}

