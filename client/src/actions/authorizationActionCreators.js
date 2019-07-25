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

export const changeModeActionCreator = (data) => {

    return {
        type: ACTION_TYPES.CHANGE_AUTHORIZATION_MODE_ACTION,
         data,
    }
};

