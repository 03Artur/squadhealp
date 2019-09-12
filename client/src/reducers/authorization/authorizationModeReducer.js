import ACTION_TYPES from '../../actions/actiontsTypes';
import {AUTHORIZATION_MODES, PATHS, ROLES} from '../../constants'

const initialState = {

    mode: AUTHORIZATION_MODES.LOGIN_MODE,
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
        to: PATHS.SIGN_UP
    },
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ACTION_TYPES.AUTHORIZATION_LOGIN_MODE_ACTION:
            return {
                ...state,
                mode: AUTHORIZATION_MODES.LOGIN_MODE,
                page: {
                    pageTitle: 'Login to your account',
                    documentTitle: 'Login',
                },
                form: {
                    submitButtonText: "Login",
                    initialValues: {
                        email: '',
                        password: '',
                    },

                },
                linkButton: {
                    text: 'Sign Up',
                    to: PATHS.SIGN_UP
                },
            };
        case ACTION_TYPES.AUTHORIZATION_SIGN_UP_MODE_ACTION:
            return {
                ...state,
                mode: AUTHORIZATION_MODES.SIGN_UP_MODE,
                page: {
                    pageTitle: 'Create an account',
                    documentTitle: 'Sign Up',
                },
                form: {
                    submitButtonText: "create account",
                    initialValues: {
                        role: ROLES.BUYER,
                    },
                },
                linkButton: {
                    text: 'Login',
                    to: PATHS.LOGIN
                }
            };

        default:
            return state;
    }

}


