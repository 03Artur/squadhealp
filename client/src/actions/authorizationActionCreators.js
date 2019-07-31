import ACTION_TYPES from './actiontsTypes';
import {AUTHORIZATION_MODE} from "../constants";


export const signUpActionCreator = (data) => {
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
export const logoutActionCreator = () => {
    return {
        type: ACTION_TYPES.AUTHORIZATION_LOGOUT_ACTION,
    }
};
export const getAuthorizedUserActionCreator = () => {
    const action = {
        type: ACTION_TYPES.GET_AUTHORIZED_USER,
    };
    return action;
};

export const changeModeToLoginActionCreator = () => {

    return {
        type: ACTION_TYPES.AUTHORIZATION_LOGIN_MODE_ACTION,
    }
};

export const changeModeToSignUpActionCreator = () => {

    return {
        type: ACTION_TYPES.AUTHORIZATION_SIGN_UP_MODE_ACTION,
    }
};



