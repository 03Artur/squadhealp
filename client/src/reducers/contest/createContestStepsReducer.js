import React, {Fragment} from 'react'
import ACTION_TYPES from "../../actions/actiontsTypes";
import _ from 'lodash';





export default function createContestStepsReducer(state , action) {
    switch (action.type) {
        case ACTION_TYPES.SET_CREATE_CONTEST_STEPS_ACTION:{

        }
        case ACTION_TYPES.NEXT_CREATE_CONTEST_STEP_ACTION:
            return state;
        case ACTION_TYPES.PREV_CREATE_CONTEST_STEP_ACTION:
            return state;
        case ACTION_TYPES.DONE_CURRENT_STEP_ACTION:
            const newState = _.cloneDeep(state);
            newState.currentStep.isDone = action.isDone;
            return {
                ...newState,
                isDone: action.isDone,
            };
        default:
            return state;
    }
}


