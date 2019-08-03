import ACTION_TYPES from "../../actions/actiontsTypes";

const initialState = {
    isFetching: false,
    contest: null,
    error: null,
};

export default function createContestReducer(state = initialState, action) {
    switch (action.type) {

        case ACTION_TYPES.CREATE_CONTEST_REQUEST :
            return {
                ...state,
                isFetching: true,

            };
        case ACTION_TYPES.CREATE_CONTEST_RESPONSE :
            return {
                ...state,
                contest: action.contest,
            };
        case ACTION_TYPES.CREATE_CONTEST_ERROR :
            return {

                ...state,
                isFetching: false,
                error: action.error,
            };
        default:
            return state;


    }
}
