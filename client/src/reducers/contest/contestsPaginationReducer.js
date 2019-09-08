import ACTION_TYPES from "../../actions/actiontsTypes";
import CONTEST_ACTION_TYPES from "../../actions/actionTypes/contestActionTypes";
import _ from 'lodash';

const initialState = {
    limit: 2,
    offset: 0,
};

export default function contestPaginationReducer(state = initialState, action) {

    switch (action.type) {

        case CONTEST_ACTION_TYPES.PAGINATION_OFFSET_INCREMENT: {
            return {
                ...state,
                offset: state.offset + action.offset,
            }
        }
        case CONTEST_ACTION_TYPES.PAGINATION_OFFSET_DECREMENT: {
            return {
                ...state,
                offset: state.offset - action.offset,
            }
        }
        case CONTEST_ACTION_TYPES.SET_PAGINATION_OFFSET: {
            return {
                ...state,
                offset: action.offset,
            }
        }
        case CONTEST_ACTION_TYPES.SET_PAGINATION_LIMIT: {
            return {
                ...state,
                limit: action.limit,
            }
        }
        case CONTEST_ACTION_TYPES.PAGINATION_RESET:{
            return _.clone(initialState)
        }

        default:
            return state;
    }


}



