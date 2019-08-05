import ACTION_TYPES from './../actions/actiontsTypes';
import _ from 'lodash';

const initialState = {
    user: null,
    isFetching: false,
    error: null,
};

export default function (state = initialState, action) {
    switch (action.type) {

        case ACTION_TYPES.USER_AUTHORIZATION_REQUEST: {

            const newState = _.cloneDeep(state);

            return {
                ...newState,
                isFetching: true,
                error: null,

            }
        }
        case ACTION_TYPES.USER_AUTHORIZATION_RESPONSE: {
            const newState = _.cloneDeep(state);

            return {
                ...newState,
                isFetching: false,
                user: action.user,
                error: null,

            }
        }

        case ACTION_TYPES.USER_AUTHORIZATION_ERROR: {
            const newState = _.cloneDeep(state);


            return {
                ...newState,
                isFetching: false,
                error: action.error,

            }
        }


        default: {
            return state;
        }
    }

}