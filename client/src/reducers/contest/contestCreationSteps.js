import ACTION_TYPES from "../../actions/actiontsTypes";
import _ from 'lodash';
import queryString from 'query-string';
import history from "../../history";
import {CONTEST_CREATION_ALL_STEPS, CREATE_CONTEST_STEPS} from "../../constants";

const initialState = {
    steps: [
        CONTEST_CREATION_ALL_STEPS.get(CREATE_CONTEST_STEPS.SELECT_TASK_TYPE),
        CONTEST_CREATION_ALL_STEPS.get(CREATE_CONTEST_STEPS.CREATE_CONTEST),
        CONTEST_CREATION_ALL_STEPS.get(CREATE_CONTEST_STEPS.CONTEST_PAYMENT),
    ],
    currentStepIndex: 0
};


export default function (state=initialState,action) {
    switch (action.type) {
        case ACTION_TYPES.SET_CURRENT_STEP_ACTION:{
            return _.cloneDeep({
                ...state,
                currentStepIndex: action.index,
            })
        }
        case ACTION_TYPES.INSERT_TASK_STEPS_TO_STEPS_ACTION:{
            return _.cloneDeep({
                ...state,
                steps: action.steps,

            });
        }
        case ACTION_TYPES.NEXT_CONTEST_CREATION_STEP_ACTION:{
            const newState = _.cloneDeep(state);
            let {currentStepIndex, steps,} = newState;
            if (currentStepIndex < steps.length - 1) {
                return {
                    ...newState,
                    currentStepIndex: (currentStepIndex + 1)
                };
            } else {
                return newState;
            }
        }
        case ACTION_TYPES.PREV_CREATE_CONTEST_STEP_ACTION: {
            const newState = _.cloneDeep(state);
            let {currentStepIndex,} = newState;
            if (currentStepIndex > 0) {
                return {
                    ...newState,
                    currentStepIndex: (currentStepIndex - 1),
                };
            } else {
                return newState;
            }
        }
        default:{
            return state;
        }
    }

}
