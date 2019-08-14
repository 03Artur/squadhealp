import ACTION_TYPES from "../../actiontsTypes";
import {CREATE_CONTEST_STEP_INFO} from "../../../constants/createContestConstants";



export const selectTaskTypesActionCreator = types => {
    return {
        type: ACTION_TYPES.SELECT_TASK_TYPES_ACTION,
        types: types,
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
export const nextContestCreationStepActionCreator = () => {

    return {
        type: ACTION_TYPES.NEXT_CONTEST_CREATION_STEP_ACTION,
    }
};

export const prevCreateContestStepActionCreate = () => {

    return {
        type: ACTION_TYPES.PREV_CREATE_CONTEST_STEP_ACTION,
    }
};
export const createContestSetQueryStringCreator = (query) => ({
    type: ACTION_TYPES.CONTEST_CREATION_SET_QUERY,
    query,
});

export const createContestRemoveQueryStringCreator = () => ({
    type: ACTION_TYPES.CONTEST_CREATION_REMOVE_QUERY,

});

export const contestCreationAddParamToQueryParamsObjCreator = (query) => ({
    type: ACTION_TYPES.CONTEST_CREATION_ADD_PARAM_TO_QUERY,
    query,

});