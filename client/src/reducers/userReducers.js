/* like mutation */
import ACTION from '../actions/actiontsTypes';
import ACTION_TYPES from '../actions/actiontsTypes';

const initialState = {
    users: [],
    isFetching: false,
    error: null,
    query: {
        limit: 20,
        offset: 0,
    },
};

export default (state = initialState, action) => {

    switch (action.type) {
        case ACTION_TYPES.GET_USERS_REQUEST: {
            return {
                ...state,
                isFetching: true,
            }
        }
        case ACTION_TYPES.GET_USERS_RESPONSE: {
            return {
                ...state,
                users: action.users,
                query: {
                    ...state.query,
                    offset: state.query.offset + action.users.length,
                }
            }
        }
        case ACTION_TYPES.GET_USERS_ERROR: {
            return {
                ...state,
                error: action.error,
            }
        }
        case ACTION_TYPES.GET_USERS_LIMIT_CHANGE: {
            return {
                ...state,
                query: {
                    offset: action.limit
                }
            }
        }
        default: {
            return state;
        }


    }


}


