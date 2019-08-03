import ACTION_TYPES from '../actions/actiontsTypes';
import _ from 'lodash';
import history from '../history';
import queryString from 'query-string';
import {Map} from 'immutable';

function getInitialState() {

    let query = {
        limit: 10,
        offset: 0,
    };
    if (history.location.search) {
        query = queryString.parse(history.location.search);
    }
    return {
        users: [],
        count: 0,
        isFetching: false,
        error: null,
        query,
    }
}


export default (state = getInitialState(), action) => {
    switch (action.type) {

        case ACTION_TYPES.GET_USERS_REQUEST: {
            return {
                ...state,
                isFetching: true,
                error: null,
            };
        }
        case ACTION_TYPES.GET_USERS_RESPONSE: {


            return {
                ...state,
                isFetching: false,
                users: _.cloneDeep([...state.users, ...action.users]),
                count: action.count,
            };

        }
        case ACTION_TYPES.GET_USERS_ERROR: {
            return {
                ...state,
                isFetching: false,
                error: action.error,
            };
        }
        case ACTION_TYPES.GET_USERS_LIMIT_CHANGE: {
            return {
                ...state,
                query: {
                    ...state.query,
                    limit: action.limit,
                }
            };


        }
        case ACTION_TYPES.SET_USERS_QUERY_STRING_ACTION: {
            return {
                ...state,
                query: {
                    ...state.query,
                    offset: (parseInt(state.query.offset) + parseInt(state.query.limit)),
                },
            };
        }
        case ACTION_TYPES.UPDATE_USER_RESPONSE: {
            //find user index in users array by id

            const newUsers = _.cloneDeep(state.users);
            const userIndex = newUsers.findIndex(item => item.id === action.user.id);
            newUsers[userIndex] = action.user;
            return {
                ...state,
                users: newUsers,
            };
        }


        default: {
            /*history.push({search: queryString.stringify(state.query)});*/

            return state;
        }
    }


}


