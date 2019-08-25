import ACTION_TYPES from './actiontsTypes';

export const getUsersActionCreator = (queryString) => {
    return {
        type: ACTION_TYPES.GET_USERS_ACTION,
        queryString,
    }
};
export const setQueryStringActionCreator = () => {
    return {
        type: ACTION_TYPES.SET_USERS_QUERY_STRING_ACTION,

    }
};
export const getUserActionCreator = (id) => {
    return {
        type: ACTION_TYPES.GET_USER_ACTION,
        id,
    }
};

export const updateUserActionCreator = (id, user) => {
    return {
        type: ACTION_TYPES.UPDATE_USER_ACTION,
        user,
        id,
    }
};

export const deleteUserActionCreator = (id) => {
    return {
        type: ACTION_TYPES.DELETE_USER_ACTION,
        id,
    }
};


export const getUsersLimitChangeActionCreator = (limit) => {
    return {
        type: ACTION_TYPES.GET_USERS_LIMIT_CHANGE,
        limit,
    }
};
