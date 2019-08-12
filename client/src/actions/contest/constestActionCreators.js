import ACTION_TYPES from '../actiontsTypes';
import {CREATE_CONTEST_STEP_INFO} from "../../constants/createContestConstants";

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

export const removeSelectedTypesActionCreator = () => {
    return {
        type: ACTION_TYPES.REMOVE_SELECTED_TASK_TYPES,

    }
};

export const setSelectedTypesActionCreator = types => {
    return {
        type: ACTION_TYPES.SET_SELECTED_TASK_TYPES,
        types: types,
    }
};

export const createContestActionCreator = (isNameExist, contest) => {
    return {
        type: ACTION_TYPES.CREATE_CONTEST_ACTION,
        contest: contest,
        isNameExist: isNameExist,
    }
};

export const setCreateTaskStepsActionCreator = taskTypes => {

    return {
        type: ACTION_TYPES.SET_CREATE_TASK_STEPS_ACTION,
        taskSteps: taskTypes.map((item, index) => ({
            ...CREATE_CONTEST_STEP_INFO.get(item),
            query: null,
            title: `TASK ${index + 1} of ${taskTypes.length}: ${item}`,
        }))
    }
};

export const nextCreateContestStepActionCreator = () => {

    return {
        type: ACTION_TYPES.NEXT_CREATE_CONTEST_STEP_ACTION,
    }
};

export const prevCreateContestStepActionCreate = () => {

    return {
        type: ACTION_TYPES.PREV_CREATE_CONTEST_STEP_ACTION,
    }
};

export const doneCurrentStepActionCreator = () => {
    return {
        type: ACTION_TYPES.DONE_CURRENT_STEP_ACTION,
    }
};

export const setCurrentStepActionCreate = (step) => {
    return {
        type: ACTION_TYPES.SET_CURRENT_STEP_ACTION,
        step,
    }
};

export const createTaskActionCreator = (task) => ({
    type: ACTION_TYPES.CREATE_TASK_ACTION,
    task: task,
});

export const createContestSetQueryStringCreator = (query) => ({
    type: ACTION_TYPES.CREATE_CONTEST_SET_QUERY_OBJECT,
    query,
});

export const createContestRemoveQueryStringCreator = () => ({
    type: ACTION_TYPES.CREATE_CONTEST_REMOVE_QUERY_OBJECT,

});
export const createContestAddParamToQueryStringCreator = (query) => ({
    type: ACTION_TYPES.CREATE_CONTEST_ADD_PARAM_TO_QUERY_OBJECT,
    query,

});


