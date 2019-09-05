import ACTION_TYPES from '../../actions/actiontsTypes';
import history from '../../history';
import queryString from 'query-string';
import _ from 'lodash';

function getInitialState() {
    return {
        query: queryString.parse(history.location.search),
        contests: [],
        isFetching: false
    }
}


export default function contestsReducer(state = getInitialState(), action) {
    switch (action.type) {
        case ACTION_TYPES.GET_ALL_CONTESTS_REQUEST: {
            return {
                ..._.cloneDeep(state),
                isFetching: true,
            };
        }
        case ACTION_TYPES.GET_ALL_CONTESTS_RESPONSE: {
            const {count, contests} = action;
            return {
                ..._.cloneDeep(state),
                count,
                contests,
                isFetching: false,
            };
        }
        case ACTION_TYPES.GET_ALL_CONTESTS_ERROR: {
            return {
                ..._.cloneDeep(state),
                isFetching: false,
                error: action.error,
            };
        }
        default: {
            return state;
        }
    }
}




