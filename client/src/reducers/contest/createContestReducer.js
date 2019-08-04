import ACTION_TYPES from "../../actions/actiontsTypes";
import {Map, List} from "immutable"

const initialState = new Map({
    isFetching: false,
    contest: null,
    error: null,
    tasks: null,
    isNameExist: false,
}).toJS();

export default function createContestReducer(state = initialState, action) {
    switch (action.type) {

        case ACTION_TYPES.CREATE_TASK_REQUEST:
        case ACTION_TYPES.CREATE_CONTEST_REQUEST :
            return new Map({
                ...state,
                isFetching: true,

            }).toJS();
        case ACTION_TYPES.CREATE_CONTEST_RESPONSE :
            return new Map({
                ...state,
                contest: action.contest,

            }).toJS();
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
        case ACTION_TYPES.SET_IS_NAME_EXIST:
            return new Map({
                ...state,
                isNameExist: action.isNameExist,
            });
        default:
            return state;


    }
}

