import ACTION_TYPES from '../actions/actiontsTypes';
import _ from 'lodash';
import history from '../history';
import queryString from 'query-string';

const initialState = {
    users: [],
    count: 0,
    isFetching: false,
    error: null,
    query: {
        limit: 5,
        offset: 0,

    },
};

export default (state = initialState, action) => {
    console.log("Admin users reducer");
    switch (action.type) {
        case ACTION_TYPES.GET_USERS_REQUEST: {
            return {
                ...state,
                isFetching: true,
                error: null,
            }
        }
        case ACTION_TYPES.GET_USERS_RESPONSE: {


            const newUsers = [...(_.cloneDeep(state.users)), ...action.users];
            const newState = {
                ...state,
                isFetching: false,
                users: newUsers,
                count: action.count,
                query: {
                    ...state.query,
                    offset: newUsers.length,
                }
            };

            history.push({search: queryString.stringify(newState.query)})

            return newState;
        }
        case ACTION_TYPES.GET_USERS_ERROR: {
            return {
                ...state,
                isFetching: false,
                error: action.error,
            }
        }
        case ACTION_TYPES.GET_USERS_LIMIT_CHANGE: {
            const newState = {
                ...state,
                query: {
                    ...state.query,
                    limit: action.limit,
                }
            };
            history.push({search: queryString.stringify(newState.query)});
            return newState;

        }
        case ACTION_TYPES.SET_USERS_QUERY_STRING_ACTION: {
            return {
                ...state,
                query: action.query,
            }
        }
        case ACTION_TYPES.UPDATE_USER_RESPONSE: {
            console.log('1');
            const userIndex = state.users.findIndex(item => item.id === action.user.id);
            console.log('2', userIndex);

            const newUsers = _.cloneDeep(state.users);
            console.log('3');

            newUsers[userIndex] = action.user;
            return {
                ...state,
                users: newUsers,
            }
        }



        default: {
            /*history.push({search: queryString.stringify(state.query)});*/

            return state;
        }
    }


}


