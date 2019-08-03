import ACTION_TYPES from '../actiontsTypes';

export const getAllContestsActionCreator = () => {
    return {
        type: ACTION_TYPES.GET_ALL_CONTESTS_ACTION,
    }
};

export const getContestActionCreator = (contestId) => {
    return {
        type: ACTION_TYPES.GET_CONTEST_ACTION,
        contestId,
    }
};

export const updateContestActionCreator = (contest) => {
    return {
        type: ACTION_TYPES.UPDATE_CONTEST_ACTION,
        contest,
    }
};

export const deleteContestActionCreator = (contest) => {
    return {
        type: ACTION_TYPES.DELETE_CONTEST_ACTION,
        contest,
    }
};

export const setSelectedTypesActionCreator = types => {
    return {
        type: ACTION_TYPES.SET_SELECTED_TASK_TYPES,
        types:types,
    }
};

export const createContestActionCreator = contest => {
    return {
        type: ACTION_TYPES.CREATE_CONTEST_ACTION,
        contest: contest,
    }
};
