import ACTION_TYPES from "../../actions/actiontsTypes";

const initialState = {
    contest: null,
    tasks: null,
};

export default function createContestReducer(state = initialState, action) {
    switch (action.type) {

        case ACTION_TYPES.CREATE_CONTEST_REQUEST :
            return {
                ...state,
            }



    }
}

