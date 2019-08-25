import React, {useReducer} from 'react';
import ACTION_TYPES from "../../actions/actiontsTypes";
import {Map, List} from "immutable"
import {CONTEST_CREATION_ALL_STEPS, TASK_TYPE, CREATE_CONTEST_STEPS} from "../../constants";
import queryString from 'query-string';
import history from "../../history";











const initialState = {
    contest: null,
    tasks: [],
    isFetching: false,
};





export default function contestCreationReducer(state = initialState, action) {
    switch (action.type) {



        case ACTION_TYPES.CONTEST_CREATION_GET_CONTEST_IN_DRAW_REQUEST:
        case ACTION_TYPES.CONTEST_CREATION_CREATE_TASK_REQUEST:
        case ACTION_TYPES.CONTEST_CREATION_CREATE_CONTEST_REQUEST :
            return new Map({
                ...state,
                isFetching: true,

            }).toJS();

        case ACTION_TYPES.CONTEST_CREATION_CREATE_CONTEST_RESPONSE :
            return new Map({
                ...state,
                contest: action.contest,
            }).toJS();

        case ACTION_TYPES.CONTEST_CREATION_GET_CONTEST_IN_DRAW_RESPONSE:
            return (new Map({
                ...state,
                contest: action.contest,
                tasks: action.tasks,
            }).toJS());

        case ACTION_TYPES.CONTEST_CREATION_CREATE_TASK_RESPONSE :
            return new Map({
                ...state,
                tasks: new List([...state.tasks, action.task]).toJS(),

            }).toJS();

        case ACTION_TYPES.CONTEST_CREATION_ERROR :
            return new Map({
                ...state,
                isFetching: false,
                error: action.error,
            }).toJS();
        /*
        *
        * QUERY
        *
        * */
        case ACTION_TYPES.CONTEST_CREATION_ADD_PARAM_TO_QUERY:
            return new Map({
                ...state,
                query: {
                    ...state.query,
                    ...action.query,
                },
            }).toJS();

        case ACTION_TYPES.CONTEST_CREATION_SET_QUERY:
            return new Map({
                ...state,
                query: action.query,
            }).toJS();

        case ACTION_TYPES.CONTEST_CREATION_REMOVE_QUERY:
            return new Map({
                ...state,
                query: null,
            }).toJS();


        case ACTION_TYPES.NEXT_CONTEST_CREATION_STEP_ACTION: {
            const newState = new Map(state).toJS();
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
            const newState = new Map(state).toJS();
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
        case ACTION_TYPES.SELECT_TASK_TYPES_ACTION: {

            return new Map({
                ...state,
                query: {
                    ...state.query,
                    types: action.types
                },
                steps: [...initialSteps, ...getTaskSteps(action.types)].sort((a,b) => a.order-b.order),
            }).toJS()
        }

        default:
            return state;

    }
}

