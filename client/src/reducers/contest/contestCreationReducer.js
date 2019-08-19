import React, {useReducer} from 'react';
import ACTION_TYPES from "../../actions/actiontsTypes";
import {Map, List} from "immutable"
import {CONTEST_CREATION_ALL_STEPS, TASK_TYPE, CREATE_CONTEST_STEPS} from "../../constants";
import queryString from 'query-string';
import history from "../../history";


const initialSteps = [
    CONTEST_CREATION_ALL_STEPS.get(CREATE_CONTEST_STEPS.SELECT_TASK_TYPE),
    CONTEST_CREATION_ALL_STEPS.get(CREATE_CONTEST_STEPS.CREATE_CONTEST),
    CONTEST_CREATION_ALL_STEPS.get(CREATE_CONTEST_STEPS.CONTEST_PAYMENT),
];

const getTaskSteps = (types) => {
    const mapSteps = new Map([
        [TASK_TYPE.NAME, CREATE_CONTEST_STEPS.CREATE_NAME_TASK],
        [TASK_TYPE.LOGO, CREATE_CONTEST_STEPS.CREATE_LOGO_TASK],
        [TASK_TYPE.TAGLINE, CREATE_CONTEST_STEPS.CREATE_TAGLINE_TASK],
    ]);
    return types.map(item => CONTEST_CREATION_ALL_STEPS.get(mapSteps.get(item)));
};

const getInitialState = () => {
    let queryObj = {};
    let taskSteps = [];

    if (history.location.search) {
        queryObj = queryString.parse(history.location.search);
        if (queryObj.types) {
            if (!Array.isArray(queryObj.types)) {
                queryObj.types = [queryObj.types];

            }
        }
    }
    if(queryObj.types){
        taskSteps = getTaskSteps(queryObj.types);
    }

    const steps = [...initialSteps, ...taskSteps].sort((a, b) => a.order - b.order);
    let currentStepIndex = 0;
    const query = {};
    for (let item of steps) {
        if (queryObj[item.queryKey]) {
            query[item.queryKey] = queryObj[item.queryKey];
            currentStepIndex++;
            console.log(currentStepIndex)
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
        case ACTION_TYPES.INSERT_TASK_STEPS_TO_STEPS_ACTION: {
            return new Map({
                ...state,
                steps: [...state.steps, ...action.tasksSteps].sort((a, b) => a.order - b.order),

            }).toJS();
        }


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
                query: {
                    ...state.query,
                    contestId: action.contest.id,
                },


            }).toJS();

        case ACTION_TYPES.CONTEST_CREATION_GET_CONTEST_IN_DRAW_RESPONSE :
            const taskQueryValues = action.tasks.reduce((res,item) =>{
                res[item.type] =item.id;
                return res;
            },{});
            return (new Map({
                ...state,
                contest: action.contest,
                tasks: action.tasks,
                query: {
                    ...state.query,
                    contestId: action.contest.id,
                    ...taskQueryValues,
                },
            }).toJS());

        case ACTION_TYPES.CONTEST_CREATION_CREATE_TASK_RESPONSE :
            const query = {
                ...state.query,
                [action.task.type]:action.task.id,

            };
            return new Map({
                ...state,
                tasks: new List([...state.tasks, action.task]).toJS(),
                query,
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

