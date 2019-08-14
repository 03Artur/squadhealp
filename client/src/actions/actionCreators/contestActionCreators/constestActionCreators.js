import ACTION_TYPES from '../../actiontsTypes';

export const getAllContestsActionCreator = () => {
    return {
        type: ACTION_TYPES.GET_ALL_CONTESTS_ACTION,
    }
};

export const getContestInDrawActionCreator = (contestId) => {
    return {
        type: ACTION_TYPES.GET_CONTEST_IN_DRAW_ACTION,
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

export const removeSelectedTypesActionCreator = () => {
    return {
        type: ACTION_TYPES.REMOVE_SELECTED_TASK_TYPES,

    }
};

export const createContestActionCreator = (isNameExist, contest) => {
    return {
        type: ACTION_TYPES.CREATE_CONTEST_ACTION,
        contest: contest,
        isNameExist: isNameExist,
    }
};

export const createTaskActionCreator = (contestId, taskFormData) => ({
    type: ACTION_TYPES.CREATE_TASK_ACTION,
    taskFormData,
    contestId,
});
