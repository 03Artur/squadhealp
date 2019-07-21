import ACTION_TYPES from './actiontsTypes';


export const singUpActionCreator = (data) => {
    console.log('singUpActionCreator');
    return {
        type: ACTION_TYPES.USER_SIGN_UP_ACTION,
        data,
    }
};

export const loginActionCreator = (data) => {
    console.log('loginActionCreator');
    return {
        type: ACTION_TYPES.USER_LOGIN_ACTION,
        data,
    }
};

