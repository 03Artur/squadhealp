import ACTION_TYPES from './actiontsTypes';
import {ROLE, PATH} from "../constants";
import Link from "../utils/classes/Link";


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

export const closeErrorActionCreator = () => {
    return {
        type: ACTION_TYPES.USER_AUTHORIZATION_ERROR,
        error: null,
    }
};

export const getNavigationActionCreator = (role) => {

    const action = {
        type: ACTION_TYPES.GET_GUEST_NAVIGATION,
        userNav: [
            new Link("View dashboard", PATH.DASHBOARD),
            new Link("Logout", ""),
        ],
        menuNav: [
            {}
        ]

    };
    switch (role) {
        case ROLE.ADMIN:
            return {};
        case ROLE.CREATIVE:
            return [];
        case ROLE.BUYER:
            return [];
        default:
            return action;
    }


};


