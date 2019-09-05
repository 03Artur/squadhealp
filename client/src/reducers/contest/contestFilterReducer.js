import ACTION_TYPES from "../../actions/actiontsTypes";
import CONTEST_ACTION_TYPES from "../../actions/actionTypes/contestActionTypes";
import _ from 'lodash';

const initialState = {};

export default function contestFilterReducer(state = initialState, action) {

    switch (action.type) {
        case CONTEST_ACTION_TYPES.ADD_FILTER_PROPS: {
            return {
                ...state,
                ...action.props
            }
        }
        case CONTEST_ACTION_TYPES.REMOVE_FILTER_PROPS: {
            return _.omit(state, action.keys);
        }
        case CONTEST_ACTION_TYPES.SET_FILTER: {
            return _.clone(action.filter)
        }

        default:
            return state;
    }


}



