import ACTION_TYPES from './../actions/actiontsTypes';


const initialState = {
    user: null,
    isFetching: false,
    error: null,
    isShowError: false,
};

export default function (state = initialState, action) {
    console.group('authorizationReducer');
    switch (action.type) {

        case ACTION_TYPES.USER_AUTHORIZATION_REQUEST: {
            console.groupEnd()

            return {
                ...state,
                isFetching: true,
                error: null,
            }
        }
        case ACTION_TYPES.USER_AUTHORIZATION_RESPONSE: {
            console.log('USER_AUTHORIZATION_RESPONSE action: ', action);
            console.groupEnd();
            return {
                ...state,
                isFetching: false,
                user: action.user,
            }
        }
        case ACTION_TYPES.USER_AUTHORIZATION_ERROR: {
            console.groupEnd();

            return {
                ...state,
                isFetching: false,
                error: action.error,
                isShowError: true,
            }
        }
        case ACTION_TYPES.AUTHORIZATION_COVER_ERROR_ACTION: {
            console.groupEnd()

            return {
                ...state,
                isShowError: false,
            }
        }
        case ACTION_TYPES.AUTHORIZATION_LOGOUT_ACTION:
            console.groupEnd()

            return initialState;
        default: {
            console.groupEnd()

            return state;
        }
    }

}