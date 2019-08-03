import ACTION_TYPES from "../../actions/actiontsTypes";
import {Map} from "immutable"

const initialState = new Map({
    isFetching: false,
    contest: null,
    error: null,
    tasks: null,
}).toJS();

export default function createContestReducer(state = initialState, action) {
    switch (action.type) {

        case ACTION_TYPES.CREATE_TASK_REQUEST:
        case ACTION_TYPES.CREATE_CONTEST_REQUEST :
            return  new Map( {
                ...state,
                isFetching: true,

            }).toJS();
        case ACTION_TYPES.CREATE_CONTEST_RESPONSE :
            return new Map( {
                ...state,
                contest: action.contest,

            }).toJS();
        case ACTION_TYPES.CREATE_TASK_RESPONSE :
            return new Map( {
                ...state,
                tasks: [...state.tasks, action.task]
            }).toJS();
        case ACTION_TYPES.CREATE_CONTEST_ERROR :
            return new Map( {

                ...state,
                isFetching: false,
                error: action.error,
            }).toJS();
        default:
            return state;


    }
}

