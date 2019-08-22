import ACTION_TYPES from '../../actions/actiontsTypes';
import _ from 'lodash';

const initialState = {
    user: null,
    isFetching: false,
    error: null,
};


export default function (state = initialState, action) {
    console.group("Authorization Reducer");
    console.log(action);
    console.groupEnd();
    switch (action.type) {

        case ACTION_TYPES.USER_AUTHORIZATION_REQUEST: {
            return _.cloneDeep({
                ...state,
                isFetching: true,
                error: null,
            })
        }
        case ACTION_TYPES.USER_AUTHORIZATION_RESPONSE: {
            return _.cloneDeep({
                ...state,
                isFetching: false,
                user: action.user,
                error: null,
            })
        }

        case ACTION_TYPES.USER_AUTHORIZATION_ERROR: {
            return _.cloneDeep({
                ...state,
                user:null,
                isFetching: false,
                error: action.error,
            })
        }

        default: {
            return state;
        }
    }
}