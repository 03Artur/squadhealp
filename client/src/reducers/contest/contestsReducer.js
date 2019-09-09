import ACTION_TYPES from '../../actions/actiontsTypes';
import history from '../../history';
import queryString from 'query-string';
import _ from 'lodash';
import CONTEST_ACTION_TYPES from "../../actions/actionTypes/contestActionTypes";

function getInitialState() {
    return {
        query: queryString.parse(history.location.search),
        contests: [],
        count: 0,
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
        case CONTEST_ACTION_TYPES.LIKE_CONTEST_RESPONSE: {
            const {data: {taskId}} = action;
            const clonedState = _.cloneDeep(state);
            const {contests} = clonedState;
            const likedContest = contests.find(task => task.id === taskId);
            likedContest.isFavorite = true;
            return clonedState;
        }
        case CONTEST_ACTION_TYPES.DISLIKE_CONTEST_RESPONSE: {
            const {data: {taskId}} = action;
            const clonedState = _.cloneDeep(state);
            const {contests} = clonedState;
            const likedContest = contests.find(task => task.id === taskId);
            likedContest.isFavorite = false;
            return clonedState;
        }

        default: {
            return state;
        }
    }
}




