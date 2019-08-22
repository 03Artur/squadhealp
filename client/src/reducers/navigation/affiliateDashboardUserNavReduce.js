import ACTION_TYPES from "../../actions/actiontsTypes";
import {PATHS, ROLE, TASK_TYPE} from "../../constants";
import {Menu, MenuItem} from "../../utils/classes/Link";

const initialState = []

export default function (state = initialState, action) {

    switch (action.type) {
        case ACTION_TYPES.USER_AUTHORIZATION_RESPONSE: {

            const navMap = new Map([
                [ROLE.ADMIN, [
                    new MenuItem('users', PATHS.AFFILIATE_DASHBOARD_USERS, 'users.svg'),
                ],],
                [ROLE.BUYER, [],],
                [ROLE.CREATIVE, [],],
            ]);
            const nav = navMap.get(action.user.role);
            return nav ? nav : [];
        }
        case ACTION_TYPES.USER_AUTHORIZATION_ERROR: {
            return [];
        }

        default: {
            return state;
        }

    }

}


