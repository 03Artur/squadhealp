import ACTION_TYPES from '../../actiontsTypes';
import {CREATE_CONTEST_STEPS, TASK_TYPE,CONTEST_CREATION_ALL_STEPS} from "../../../constants";

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

export const insertTaskStepsToStepsActionCreator = (types) => {
    const mapSteps = new Map([
        [TASK_TYPE.NAME, CREATE_CONTEST_STEPS.CREATE_NAME_TASK],
        [TASK_TYPE.LOGO, CREATE_CONTEST_STEPS.CREATE_LOGO_TASK],
        [TASK_TYPE.TAGLINE, CREATE_CONTEST_STEPS.CREATE_TAGLINE_TASK],
    ]);
    const tasksSteps = types.map(item => CONTEST_CREATION_ALL_STEPS.get(mapSteps.get(item)));
    return {
        type: ACTION_TYPES.INSERT_TASK_STEPS_TO_STEPS_ACTION,
        tasksSteps: tasksSteps,
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
