import React, {Fragment} from 'react'
import ACTION_TYPES from "../../actions/actiontsTypes";
import _ from 'lodash';


class Step {
    constructor(title, tip) {
        this.title = title;
        this.tip = tip;
    }

    getDescription() {
        return <Fragment>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aspernatur aut blanditiis cumque
            delectus distinctio eos excepturi facilis ipsam magnam nobis placeat, provident quia quod ratione
            sapiente, unde! Quidem, tenetur?
        </Fragment>
    }
}


const initialState = {
    currentStep: null,
    index: null,
    steps: null,

};

export default function createContestStepsReducer(state = initialState, action) {
    switch (action.type) {
        case ACTION_TYPES.NEXT_CREATE_CONTEST_STEP_ACTION:
            return {};
        case ACTION_TYPES.PREV_CREATE_CONTEST_STEP_ACTION:
            return {};
        case ACTION_TYPES.DONE_CURRENT_STEP_ACTION:
            const newState = _.cloneDeep(state);
            newState.currentStep.isDone = action.isDone;
            return {
                ...newState,
                isDone: action.isDone,
            };
        default:
            return state;
    }
}


