import ACTION_TYPES from './../actions/actiontsTypes';


const initialState = {
    user: null,
    isFetching: false,
    error: null,
    isShowError: false,
};

export default function (state = initialState, action) {

    switch (action.type) {

        case ACTION_TYPES.USER_AUTHORIZATION_REQUEST: {
            return {
                ...state,
                isFetching: true,
                error: null,
            }
        }
        case ACTION_TYPES.USER_AUTHORIZATION_RESPONSE: {
            return {
                ...state,
                isFetching: false,
                user: action.user,
            }
        }
        case ACTION_TYPES.USER_AUTHORIZATION_ERROR: {
            return {
                ...state,
                isFetching: false,
                error: action.error,
                isShowError: true,
            }
        }
        case ACTION_TYPES.AUTHORIZATION_COVER_ERROR_ACTION: {
            return {
                ...state,
                isShowError: false,
            }
        }
        case ACTION_TYPES.AUTHORIZATION_LOGOUT_ACTION:
            return initialState;
        default: {
            return state;
        }
    }

}