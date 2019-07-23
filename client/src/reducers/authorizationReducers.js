import ACTION_TYPES from './../actions/actiontsTypes';
import PATH from '../constants/paths';
import history from './../history';


const initialState = {
    user: null,
    isFetching: false,
    error: null,
};

const authorizationPageState = {
    isLoginMode: history.location.pathname === PATH.LOGIN
};


export function authorizationModeReducer(state = authorizationPageState, action) {
    switch (action.type) {
        case ACTION_TYPES.CHANGE_AUTHORIZATION_MODE_ACTION: {

            return {
                ...state,
                isLoginMode: action.isLoginMode,
            };
        }

        default: {
            return state;
        }
    }
}


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
            }
        }

        default: {
            return state;
        }
    }

}