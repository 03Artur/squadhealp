import ACTION_TYPES from './actiontsTypes';

export const getUsersActionCreator = () => {
    return {
        type: ACTION_TYPES.GET_USERS_ACTION,
    }
};

export const updateUserActionCreator = (user) => {
    return {
        type: ACTION_TYPES.UPDATE_USER_ACTION,
        user,
    }
};

export const deleteUserActionCreator = (user) => {
    return {
        type: ACTION_TYPES.DELETE_USER_ACTION,
        user,
    }
};

export const getUserActionCreator = (userId) => {
    return {
        type: ACTION_TYPES.GET_USER_ACTION,
        userId,
    }
};

export const getUsersLimitChangeActionCreator = (limit) => {
    return {
        type: ACTION_TYPES.GET_USERS_LIMIT_CHANGE,
        limit,
    }
};