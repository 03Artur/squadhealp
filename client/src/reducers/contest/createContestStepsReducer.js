import React, {Fragment} from 'react'
import ACTION_TYPES from "../../actions/actiontsTypes";
import _ from 'lodash';
import List from "../../utils/classes/LinkList";
import {COMPLEX_PATH} from "../../constants";
import SelectTaskTypes from "../../components/forms/SelectTaskTypes/SelectTaskTypes";
import CreateContest from "../../components/forms/CreateContest/CreateContest";
import store from '../../store'
import {
    createContestActionCreator,
    createTaskActionCreator, nextCreateContestStepActionCreate,
    setSelectedTypesActionCreator
} from "../../actions/contest/constestActionCreators";



const initialState = {
    steps: new List([
        {
            path: COMPLEX_PATH.SELECT_TASK_TYPE,
            component: SelectTaskTypes,
            onSubmit: (types) => store.dispatch(setSelectedTypesActionCreator(types)),
        },
        {
            path: COMPLEX_PATH.CREATE_CONTEST,
            component: CreateContest,
            onSubmit: (contest) => store.dispatch(createContestActionCreator(contest)),
        },
        {
            path: COMPLEX_PATH.CREATE_TASK,
            component: null,
            onSubmit: (task) => store.dispatch(createTaskActionCreator(task)),
        },
    ])
};


export default function createContestStepsReducer(state = initialState, action) {
    switch (action.type) {

        case ACTION_TYPES.NEXT_CREATE_CONTEST_STEP_ACTION: {
            const newState = _.cloneDeep(state);
            newState.next();
            return newState;
        }
        case ACTION_TYPES.PREV_CREATE_CONTEST_STEP_ACTION: {
            const newState = _.cloneDeep(state);
            newState.prev();
            return newState;
        }

        default:
            return state;
    }
}


