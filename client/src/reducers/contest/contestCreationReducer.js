import React, {useReducer} from 'react';
import ACTION_TYPES from "../../actions/actiontsTypes";
import {Map, List} from "immutable"
import {CREATE_CONTEST_STEP_INFO, CREATE_CONTEST_STEPS} from "../../constants/createContestConstants";
import {TASK_TYPE} from "../../constants";
import queryString from 'query-string';
import history from "../../history";

const initialSteps = [

    CREATE_CONTEST_STEP_INFO.get(CREATE_CONTEST_STEPS.SELECT_TASK_TYPE),
    CREATE_CONTEST_STEP_INFO.get(CREATE_CONTEST_STEPS.CREATE_CONTEST),
    CREATE_CONTEST_STEP_INFO.get(CREATE_CONTEST_STEPS.CREATE_TASKS),
    CREATE_CONTEST_STEP_INFO.get(CREATE_CONTEST_STEPS.CONTEST_PAYMENT),

];

const getInitialState = () => {
    let queryObj = {};

    if (history.location.search) {
        queryObj = queryString.parse(history.location.search);
        if (queryObj.types) {
            if (!Array.isArray(queryObj.types)) {
                queryObj.types = [queryObj.types];
            }
        }
    }

    const steps = initialSteps.sort((a, b) => a.priority - b.priority);
    let currentStepIndex = 0;
    const query = {};

    for (let item of steps) {
        if (queryObj[item.queryKey]) {
            query[item.queryKey] = queryObj[item.queryKey];
            currentStepIndex++;
        } else {
            break;
        }
    }

    return new Map({
        isFetching: false,
        contest: null,
        error: null,
        tasks: [],
        currentStepIndex,
        query,
        steps,
        typesCombinations: [
            [TASK_TYPE.NAME],
            [TASK_TYPE.LOGO],
            [TASK_TYPE.TAGLINE],
            [TASK_TYPE.NAME, TASK_TYPE.LOGO],
            [TASK_TYPE.NAME, TASK_TYPE.TAGLINE],
            [TASK_TYPE.LOGO, TASK_TYPE.TAGLINE],
            [TASK_TYPE.NAME, TASK_TYPE.LOGO, TASK_TYPE.TAGLINE],
        ],
    }).toJS();
};


export default function contestCreationReducer(state = getInitialState(), action) {
    switch (action.type) {
        /*
        *
        * CONTEST TASK
        *
        * */
        case ACTION_TYPES.CONTEST_CREATION_GET_CONTEST_IN_DRAW_REQUEST:
        case ACTION_TYPES.CONTEST_CREATION_CREATE_TASK_REQUEST:
        case ACTION_TYPES.CONTEST_CREATION_CREATE_CONTEST_REQUEST :
            return new Map({
                ...state,
                isFetching: true,

            }).toJS();

        case ACTION_TYPES.CONTEST_CREATION_CREATE_CONTEST_RESPONSE :
            return (new Map({
                ...state,
                contest: action.contest,
                query: {
                    ...state.query,
                    contestId: action.contest.id,
                },
                currentStepIndex: state.currentStepIndex +1,


            }).toJS());

        case ACTION_TYPES.CONTEST_CREATION_GET_CONTEST_IN_DRAW_RESPONSE :
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
                currentStepIndex: state.currentStepIndex+1,
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


        case ACTION_TYPES.NEXT_CONTEST_CREATION_STEP_ACTION:{
            const newState = new Map(state).toJS();
            let {currentStepIndex, steps,} = newState;
            if (currentStepIndex < steps.length-1) {
                return {
                    ...newState,
                    currentStepIndex : (currentStepIndex + 1)
                };
            } else {
                return newState;
            }
        }
        case ACTION_TYPES.PREV_CREATE_CONTEST_STEP_ACTION: {
            const newState = new Map(state).toJS();
            let {currentStepIndex, } = newState;
            if (currentStepIndex > 0) {
                return {
                    ...newState,
                    currentStepIndex : (currentStepIndex - 1)
                };
            } else {
                return newState;
            }
        }

        default:
            return state;

    }
}

