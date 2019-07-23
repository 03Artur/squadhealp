import ACTION_TYPES from './actiontsTypes';


export const singUpActionCreator = (data) => {
    return {
        type: ACTION_TYPES.USER_SIGN_UP_ACTION,
        data,
    }
};

export const loginActionCreator = (data) => {
    return {
        type: ACTION_TYPES.USER_LOGIN_ACTION,
        data,
    }
};

export const modeActionCreator = (isLoginMode) => {

    return {
        type: ACTION_TYPES.CHANGE_AUTHORIZATION_MODE_ACTION,
        isLoginMode: isLoginMode,
    }
};

