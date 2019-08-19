import ACTION_TYPES from '../../actions/actiontsTypes';
import { NAV_MAP, PATHS, ROLE} from "../../constants";
import {Menu, MenuItem} from "../../utils/classes/Link";


const initialState = {
    user: null,
    isFetching: false,
    error: null,
    nav: NAV_MAP.get(ROLE.GUEST),
};




export default function (state = initialState, action) {
    switch (action.type) {

        case ACTION_TYPES.USER_AUTHORIZATION_REQUEST: {
            return {
                ...state,
                isFetching: true,
                error: null,

            }
        }
        case ACTION_TYPES.USER_AUTHORIZATION_RESPONSE: {
            return {
                ...state,
                isFetching: false,
                user: action.user,
                error: null,
                nav: NAV_MAP.get(action.user.role),
            }
        }
        case ACTION_TYPES.USER_AUTHORIZATION_ERROR: {

            return {
                ...state,
                isFetching: false,
                error: action.error,
            }
        }

        default: {
            return state;
        }
    }

}