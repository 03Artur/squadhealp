import React from 'react'
import ACTION_TYPES from "../../actions/actiontsTypes";
import {COMPLEX_PATH, PATH} from "../../constants";
import {CREATE_CONTEST_STEPS, CREATE_CONTEST_STEP_INFO} from "../../constants/createContestConstants";
import _ from 'lodash';

const getInitialState = () => {

    const steps = [
        {
            ...CREATE_CONTEST_STEP_INFO.get(CREATE_CONTEST_STEPS.SELECT_TASK_TYPE),
            isDone: false,
        },
        {
            ...CREATE_CONTEST_STEP_INFO.get(CREATE_CONTEST_STEPS.CREATE_CONTEST),
            isDone: false,
        },
        {
            ...CREATE_CONTEST_STEP_INFO.get(CREATE_CONTEST_STEPS.CONTEST_PAYMENT),
            isDone: false,
        },
    ];
    return ({
        currentStepIndex: 0,

        steps,
    });
};


export default function createContestStepsReducer(state = getInitialState(), action) {
    switch (action.type) {

        case ACTION_TYPES.NEXT_CREATE_CONTEST_STEP_ACTION: {
            return {
                ...state,
                currentStepIndex: (
                    state.currentStepIndex < (state.steps.length - 1)
                        ?
                        state.currentStepIndex + 1
                        :
                        state.currentStepIndex),
            }


        }
        case ACTION_TYPES.PREV_CREATE_CONTEST_STEP_ACTION: {

            return {
                ...state,
                currentStepIndex: state.currentStepIndex--,
            };
        }
        case ACTION_TYPES.DONE_CURRENT_STEP_ACTION: {

            const newState = _.cloneDeep(state);
            const {steps, currentStepIndex} = newState;
            steps[currentStepIndex].isDone = true;
            console.log(newState);

            return newState;
        }
        case ACTION_TYPES.SET_CURRENT_STEP_ACTION: {

            const newState = _.cloneDeep(state);
            const {steps, currentStepIndex} = newState;
            steps[currentStepIndex] = action.step;
            return newState;
        }

        case ACTION_TYPES.SET_CREATE_CONTEST_STEPS_ACTION: {

            const newState = _.cloneDeep(state);
            const steps = action.steps;
            steps.sort((a, b) => a.order -b.order);
            console.log(steps);
            newState.steps = steps;


            return newState;
        }


        default:
            return state
    }
}


