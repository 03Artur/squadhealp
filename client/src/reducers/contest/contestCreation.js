import React, {useReducer} from 'react';
import ACTION_TYPES from "../../actions/actiontsTypes";
import {Map, List} from "immutable";

const initialState = {
    contest: null,
    tasks: [],
    isFetching: false,
};

export default function contestCreation(state = initialState, action) {
    switch (action.type) {

        case ACTION_TYPES.CONTEST_CREATION_REQUEST :
            return new Map({
                ...state,
                isFetching: true,

            }).toJS();

        case ACTION_TYPES.CONTEST_CREATION_RESPONSE :
            return new Map({
                ...state,
                contest: action.contest,
                tasks: action.tasks,
            }).toJS();

        case ACTION_TYPES.CONTEST_CREATION_ERROR :
            return new Map({
                ...state,
                isFetching: false,
                error: action.error,
            }).toJS();
        default:
            return state;

    }
}

