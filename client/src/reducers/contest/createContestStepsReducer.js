import ACTION_TYPES from "../../actions/actiontsTypes";
import {COMPLEX_PATH, PATH} from "../../constants";
import {CREATE_CONTEST_STEPS, CREATE_CONTEST_STEP_INFO} from "../../constants/createContestConstants";
import _ from 'lodash';



const initialSteps = [
    {
        ...CREATE_CONTEST_STEP_INFO.get(CREATE_CONTEST_STEPS.SELECT_TASK_TYPE),
        query: null,
    },
    {
        ...CREATE_CONTEST_STEP_INFO.get(CREATE_CONTEST_STEPS.CREATE_CONTEST),
        query: null,
    },
    {
        ...CREATE_CONTEST_STEP_INFO.get(CREATE_CONTEST_STEPS.CONTEST_PAYMENT),
        query: null,
    },
];

const getInitialState = () => {

    const steps = _.cloneDeep(initialSteps);
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
                        state.currentStepIndex
                ),
            }


        }
        case ACTION_TYPES.PREV_CREATE_CONTEST_STEP_ACTION: {
            console.log(ACTION_TYPES.PREV_CREATE_CONTEST_STEP_ACTION);
            const newState = _.cloneDeep(state);
            newState.currentStepIndex = (
                state.currentStepIndex > 0
                    ?
                    state.currentStepIndex - 1
                    :
                    0
            );
            newState.steps[newState.currentStepIndex].isDone = false;
            return newState;
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

        case ACTION_TYPES.SET_CREATE_TASK_STEPS_ACTION: {

            const newState = _.cloneDeep(state);
            const steps = [...(_.cloneDeep(initialSteps)),...action.taskSteps];
            steps.sort((a, b) => a.order - b.order);
            newState.steps = steps;
            return newState;
        }


        default:
            return state
    }
}


