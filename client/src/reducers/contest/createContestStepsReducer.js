import React from 'react'
import ACTION_TYPES from "../../actions/actiontsTypes";
import _ from 'lodash';
import MyList from "../../utils/classes/List";
import {COMPLEX_PATH, PATH} from "../../constants";
import SelectTaskTypes from "../../components/forms/SelectTaskTypes/SelectTaskTypes";
import ContestForm from "../../components/forms/ContestForm/ContestForm";
import store from '../../store'
import {
    createContestActionCreator,
    createTaskActionCreator, nextCreateContestStepActionCreate,
    setSelectedTypesActionCreator
} from "../../actions/contest/constestActionCreators";
import {contestPaymentActionCreator} from "../../actions/payment/contestPaymentActionCreator";
import history from "../../history";


const getInitialState = () => {
    const steps = new MyList([
        {
            path: COMPLEX_PATH.SELECT_TASK_TYPE,
            form: SelectTaskTypes,
            onSubmit: (types) => store.dispatch(setSelectedTypesActionCreator(types)),
            onSubmitSuccess: () => store.dispatch(nextCreateContestStepActionCreate())
        },
        {
            path: COMPLEX_PATH.CREATE_CONTEST,
            form: ContestForm,
            onSubmit: (contest) => { console.log(contest); return store.dispatch(createContestActionCreator(contest))},
            onSubmitSuccess: () => store.dispatch(nextCreateContestStepActionCreate())

        },
        {
            path: COMPLEX_PATH.CREATE_TASK,
            form: (props) => <h1>Form 3</h1>,
            onSubmit: (task) => store.dispatch(createTaskActionCreator(task)),
            onSubmitSuccess: () => store.dispatch(nextCreateContestStepActionCreate())

        },
        {
            path: COMPLEX_PATH.TASK_PAYMENT,
            form: (props) => <h1>Form 4</h1>,
            onSubmit: (id, creditCard) => store.dispatch(contestPaymentActionCreator(id, creditCard)),
            onSubmitSuccess: () => {
                history.push(PATH.DASHBOARD)
            },
        },
    ]);

    return ({
        currentStep: steps.head,
        steps,
    });
};


export default function createContestStepsReducer(state = getInitialState(), action) {
    switch (action.type) {

        case ACTION_TYPES.NEXT_CREATE_CONTEST_STEP_ACTION: {

            console.log("NEXT_CREATE_CONTEST_STEP_ACTION");
            return {
                ...state,
                currentStep: state.currentStep._nextNode ? state.currentStep._nextNode : state.currentStep,
            };
        }
        case ACTION_TYPES.PREV_CREATE_CONTEST_STEP_ACTION: {

            return {
                ...state,
                currentStep: state.currentStep._prevNode ? state.currentStep._prevNode : state.currentStep,
            };
        }

        default:
            return state
    }
}


