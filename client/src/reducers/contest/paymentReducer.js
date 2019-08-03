import ACTION_TYPES from "../../actions/actiontsTypes";

const initialState = {
    isFetching: false,
    isPaid: false,
    error: null,
};

export default function paymentReducer(state = initialState, action) {
    switch (action.type) {

        case ACTION_TYPES.TASK_PAYMENT_REQUEST :
            return {
                ...state,
                isFetching: true,

            };
        case ACTION_TYPES.TASK_PAYMENT_RESPONSE :
            return {
                ...state,
                isPaid: action.isPaid,
            };
        case ACTION_TYPES.TASK_PAYMENT_ACTION :
            return {

                ...state,
                isFetching: false,
                error: action.error,
            };
        default:
            return state;


    }
}

