import _ from 'lodash';
import CONTEST_ACTION_TYPES from "../../actions/actionTypes/contestActionTypes";

const initialState = {
    contest: null,
};

export default function selectedContest(state = initialState, action) {

    switch (action.type) {

        case CONTEST_ACTION_TYPES.SELECT_CONTEST_ACTION: {
            return {
                contest: action.contest,
            }
        }


        default: {
            return state;
        }
    }
}


