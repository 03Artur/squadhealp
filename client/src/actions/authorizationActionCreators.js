import ACTION_TYPES from './actiontsTypes';


export const singUpActionCreator = (data) => {
    console.log('singUpActionCreator');
    return {
        type: ACTION_TYPES.USER_SIGN_UP_ACTION,
        data,
    }
};