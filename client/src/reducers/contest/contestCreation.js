import React, {useReducer} from 'react';
import ACTION_TYPES from "../../actions/actiontsTypes";
import _ from 'lodash';

const initialState = {
    contest: null,
    tasks: [],
    isFetching: false,
    error: null,
};

export default function contestCreation(state = initialState, action) {
    switch (action.type) {

        case ACTION_TYPES.CONTEST_CREATION_REQUEST :
            return _.cloneDeep({
                ...state,
                isFetching: true,
            });

        case ACTION_TYPES.CONTEST_CREATION_RESPONSE :
            return _.cloneDeep({
                ...state,
                contest: action.contest,
                tasks: action.tasks,
            });

        case ACTION_TYPES.CONTEST_CREATION_ERROR :
            return _.cloneDeep({
                ...state,
                isFetching: false,
                error: action.error,
            });
        default:
            return state;
    }
}

