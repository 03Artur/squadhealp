import {TASK_TYPE} from "../../constants";
import ACTION_TYPES from '../../actions/actiontsTypes'
const initialState = {
    selectedTypes: null,
    typesCombinations: [
        [TASK_TYPE.NAME],
        [TASK_TYPE.LOGO],
        [TASK_TYPE.TAGLINE],
        [TASK_TYPE.NAME,TASK_TYPE.LOGO],
        [TASK_TYPE.NAME,TASK_TYPE.TAGLINE],
        [TASK_TYPE.NAME,TASK_TYPE.LOGO,TASK_TYPE.TAGLINE],
    ],
};

export default function taskTypesReducer(state = initialState, action) {
    switch (action.type) {
        case ACTION_TYPES.SET_SELECTED_TASK_TYPES:
            return {
                ...state,
                selectedTypes: action.types,
            };
        case ACTION_TYPES.REMOVE_SELECTED_TASK_TYPES:
            return {
                ...state,
                selectedTypes: null,
            };
        default:
            return state;
    }
}