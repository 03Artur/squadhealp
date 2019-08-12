import React, {useReducer} from 'react';
import ACTION_TYPES from "../../actions/actiontsTypes";
import {Map, List} from "immutable"
import _ from 'lodash';
import {CREATE_CONTEST_STEP_INFO} from "../../constants/createContestConstants";
import TaskTypeForm from "../../components/forms/TaskTypeForm/TaskTypeForm";
import ContestForm from "../../components/forms/ContestForm/ContestForm";
import TaskForm from "../../components/forms/TaskForm/TaskForm";


const initialState = new Map({
    isFetching: false,
    contest: null,
    error: null,
    tasks: null,

}).toJS();

export default function createContestReducer(state = initialState, action) {
    switch (action.type) {
        case ACTION_TYPES.GET_CONTEST_IN_DRAW_REQUEST:
        case ACTION_TYPES.CREATE_TASK_REQUEST:
        case ACTION_TYPES.CREATE_CONTEST_REQUEST :
            return new Map({
                ...state,
                isFetching: true,

            }).toJS();
        case ACTION_TYPES.CREATE_CONTEST_RESPONSE :
            return (new Map({
                ...state,
                contest: action.contest,

            }).toJS());
        case ACTION_TYPES.CREATE_TASK_RESPONSE :
            return new Map({
                ...state,
                tasks: new List([...state.tasks, action.task]).toJS(),
            }).toJS();
        case ACTION_TYPES.CREATE_CONTEST_ERROR :
            return new Map({
                ...state,
                isFetching: false,
                error: action.error,
            }).toJS();

        default:
            return state;


    }
}

