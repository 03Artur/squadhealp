import ENTRY_ACTION_TYPES from "../../actions/actionTypes/entryActionTypes";
import _ from 'lodash';


const initialState = {
    entry: null,
    isFetching: false,
    error: null,
};

export default function entryCreationReducer(state = initialState, action) {

    switch (action.type) {
        case ENTRY_ACTION_TYPES.POST_ENTRY_REQUEST: {
            return {
                ..._.cloneDeep(state),
                isFetching: true,
            }
        }
        case ENTRY_ACTION_TYPES.POST_ENTRY_RESPONSE: {
            return {
                ..._.cloneDeep(state),
                entry: action.entry,
                isFetching: false
            }
        }
        case ENTRY_ACTION_TYPES.POST_ENTRY_ERROR: {
            return {
                ..._.cloneDeep(state),
                error: action.error,
                isFetching: false
            }
        }

        default: {
            return state;
        }
    }
}