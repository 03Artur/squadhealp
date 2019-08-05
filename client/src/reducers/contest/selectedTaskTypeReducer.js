import {TASK_TYPE} from "../../constants";
import ACTION_TYPES from '../../actions/actiontsTypes';
import _ from 'lodash';
const initialState = {
    selectedTypes: [],
    typesCombinations: [
        [TASK_TYPE.NAME],
        [TASK_TYPE.LOGO],
        [TASK_TYPE.TAGLINE],
        [TASK_TYPE.NAME,TASK_TYPE.LOGO],
        [TASK_TYPE.NAME,TASK_TYPE.TAGLINE],
        [TASK_TYPE.LOGO,TASK_TYPE.TAGLINE],
        [TASK_TYPE.NAME,TASK_TYPE.LOGO,TASK_TYPE.TAGLINE],
    ],
};

export default function selectedTaskTypesReducer(state = initialState, action) {
    switch (action.type) {
        case ACTION_TYPES.SET_SELECTED_TASK_TYPES:
            const newState = _.cloneDeep(state);
            newState.selectedTypes = _.cloneDeep(action.types);
            return newState;
        case ACTION_TYPES.REMOVE_SELECTED_TASK_TYPES:
            return {
                ...state,
                selectedTypes: [],
            };
        default:
            return state;
    }
}