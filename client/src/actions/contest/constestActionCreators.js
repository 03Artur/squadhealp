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

export const createContestActionCreator = contest => {
    return {
        type: ACTION_TYPES.CREATE_CONTEST_ACTION,
        contest: contest,
    }
};

export const setCreateContestStepsActionCreator = steps => {
    return {
        type: ACTION_TYPES.SET_CREATE_CONTEST_STEPS_ACTION,
        steps: steps,

    }
};

export const nextCreateContestStepActionCreate = () => {

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
    console.log("doneCurrentStepActionCreator");
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
