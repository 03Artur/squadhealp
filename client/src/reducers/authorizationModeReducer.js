import ACTION_TYPES from '../actions/actiontsTypes';
import {AUTHORIZATION_MODE, PATH} from '../constants'

const initialState = {

    mode: AUTHORIZATION_MODE.LOGIN_MODE,
    page: {
        pageTitle: 'Login to your account',
        documentTitle: 'Login',
    },
    form: {
        submitButtonText: "Login",
        initialValues: null,
    },
    linkButton: {
        text: 'Sign Up',
        to: PATH.SIGN_UP
    },
};

export default function (state = initialState, action) {
    return {
        ...state,
        ...action.data
    };
}


