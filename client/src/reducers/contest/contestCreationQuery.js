import ACTION_TYPES from "../../actions/actiontsTypes";
import _ from 'lodash';

const initialState = {

};


export default function (state = initialState, action) {
    switch (action.type) {
        case ACTION_TYPES.SELECT_TASK_TYPES_ACTION:{
            return _.cloneDeep({
                ...state,
                types: action.types,
            })
        }
        case ACTION_TYPES.CONTEST_CREATION_SET_QUERY:{
            return action.query;
        }
        case ACTION_TYPES.CONTEST_CREATION_ADD_PARAM_TO_QUERY: {
            return _.cloneDeep({
                ...state,
                ...action.query,
            })
        }
        default: {
            return state;
        }
    }
}

