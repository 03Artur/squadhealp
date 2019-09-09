import ACTION_TYPES from '../../actiontsTypes';
import {CREATE_CONTEST_STEPS, TASK_TYPE, CONTEST_CREATION_ALL_STEPS} from "../../../constants";
import CONTEST_ACTION_TYPES from "../../actionTypes/contestActionTypes";

export const getContestsActionCreator = (queryString) => {
    return {
        type: ACTION_TYPES.GET_ALL_CONTESTS_ACTION,
        queryString,
    }
};

export const getContestInDrawActionCreator = () => {
    return {
        type: ACTION_TYPES.GET_CONTEST_IN_DRAW_ACTION,

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

export const likeContestActionCreator = (taskId) => ({
    type: CONTEST_ACTION_TYPES.LIKE_CONTEST_ACTION,
    taskId,
});

export const dislikeContestActionCreator = (taskId) => ({
    type: CONTEST_ACTION_TYPES.DISLIKE_CONTEST_ACTION,
    taskId,
});

export function selectContestAction(contest) {
    return {
        type: CONTEST_ACTION_TYPES.SELECT_CONTEST_ACTION,
        contest,
    }
}



