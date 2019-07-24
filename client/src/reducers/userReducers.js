/* like mutation */
import ACTION from '../actions/actiontsTypes';
import ACTION_TYPES from '../actions/actiontsTypes';

const initialState = {
    users: [],
    isFetching: false,
    error: null,
};

export default (state = initialState, action) => {

    switch (action.type) {
        case ACTION_TYPES.GET_ALL_USERS_REQUEST: {
            return {
                ...state,
                isFetching: true,
            }
        }
        case ACTION_TYPES.GET_ALL_USERS_RESPONSE: {
            return {
                ...state,
                users: action.users,
            }
        }
        case ACTION_TYPES.GET_ALL_USERS_ERROR: {
            return {
                ...state,
                error: action.error,
            }
        }
        default: {
            return state;
        }


    }


}


