import ACTION_TYPES from "../../actions/actiontsTypes";
import {PATHS, ROLES, TASK_TYPES} from "../../constants";
import {Menu, MenuItem} from "../../utils/classes/Link";
import queryString from 'query-string';
import _ from 'lodash';
const initialState = [];

export default function (state = initialState, action) {

    switch (action.type) {
        case ACTION_TYPES.USER_AUTHORIZATION_RESPONSE: {
            if (!action.user) {
                return _.cloneDeep(initialState)
            }
            const navMap = new Map([
                [ROLES.ADMIN, [
                    new MenuItem("View Dashboard",),
                    new MenuItem("My Account",),
                    new MenuItem("Messages",PATHS.MESSAGES),
                    new MenuItem("Affiliate Dashboard", PATHS.AFFILIATE_DASHBOARD,),
                ],],
                [ROLES.BUYER, [
                    new MenuItem("View Dashboard",),
                    new MenuItem("My Account",),
                    new MenuItem("Messages",PATHS.MESSAGES),
                    new MenuItem("Affiliate Dashboard", PATHS.AFFILIATE_DASHBOARD,),
                ],],
                [ROLES.CREATIVE, [
                    new MenuItem("View Dashboard",),
                    new MenuItem("My Contests", {
                        pathname: PATHS.AFFILIATE_DASHBOARD_CONTESTS,
                        search: queryString.stringify({
                            isPaid: true,
                            winnerId: action.user.id,
                        }),
                    }),
                    new MenuItem("My Account",),
                    new MenuItem("My Activity Feed",),
                    new MenuItem("Messages",PATHS.MESSAGES),
                    new MenuItem("Affiliate Dashboard", PATHS.AFFILIATE_DASHBOARD,),
                ],],
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


