import React from 'react'
import ACTION_TYPES from "../../actions/actiontsTypes";
import _ from 'lodash';
import MyList from "../../utils/classes/List";
import {COMPLEX_PATH, PATH} from "../../constants";
import SelectTaskTypes from "../../components/forms/SelectTaskTypes/SelectTaskTypes";
import ContestForm from "../../components/forms/ContestForm/ContestForm";
import store from '../../store';

import {
    createContestActionCreator,
    createTaskActionCreator, nextCreateContestStepActionCreate,
    setSelectedTypesActionCreator
} from "../../actions/contest/constestActionCreators";
import {contestPaymentActionCreator} from "../../actions/payment/contestPaymentActionCreator";
import history from "../../history";





const allSteps = new Map([

    [COMPLEX_PATH.SELECT_TASK_TYPE, ]

])





const getInitialState = () => {
    const steps = [
        {
            path: COMPLEX_PATH.SELECT_TASK_TYPE,
        },
        {
            path: COMPLEX_PATH.CREATE_CONTEST,

        },
        {
            path: COMPLEX_PATH.CREATE_TASK
        },
        {
            path: COMPLEX_PATH.TASK_PAYMENT,
        },
    ];

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


