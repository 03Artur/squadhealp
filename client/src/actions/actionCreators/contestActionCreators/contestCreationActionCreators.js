import ACTION_TYPES from "../../actiontsTypes";






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

export const addParamToQueryActionCreator = (query) => ({
    type: ACTION_TYPES.CONTEST_CREATION_ADD_PARAM_TO_QUERY,
    query,

});