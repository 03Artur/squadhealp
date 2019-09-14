import ENTRY_ACTION_TYPES from "../../actions/actionTypes/entryActionTypes";
import _ from 'lodash';

const initialState = {
    entries: [],
    isFetching: false,
    count: 0,
    error: null,
};

export default function entriesReducer(state = initialState, action) {
    switch (action.type) {
        case ENTRY_ACTION_TYPES.GET_ENTRIES_REQUEST: {
            return {
                ..._.cloneDeep(state),
                isFetching: true,
            }
        }
        case ENTRY_ACTION_TYPES.GET_ENTRIES_RESPONSE: {
            const oldState = _.omit(state, ['entries']);
            return {
                ..._.cloneDeep(oldState),
                entries: action.entries,
                count: action.count,
                isFetching: false,
            }
        }
        case ENTRY_ACTION_TYPES.GET_ENTRIES_ERROR: {
            return {
                ..._.cloneDeep(state),
                error: action.error,
            }
        }

        case ENTRY_ACTION_TYPES.REJECT_ENTRY_RESPONSE: {

            const {data: {id}} = action;
            const clonedState = _.cloneDeep(state);
            const entry = clonedState.entries.find((item => item.id === id));
            entry.isRejected = true;
            return clonedState;
        }

        default: {
            return state;
        }
    }
}