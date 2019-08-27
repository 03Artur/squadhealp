import ACTION_TYPES from "../../actions/actiontsTypes";
import {PATHS, ROLE, TASK_TYPE} from "../../constants";
import {Menu, MenuItem} from "../../utils/classes/Link";
import queryString from 'query-string';
import _ from 'lodash';
/*
import {mdiAccountCircle,mdiDatabaseCheck,mdiAccountEdit,mdiFormatListBulleted,mdiEmail,mdiLogout} from '@mdi/js';
*/

const initialState = [];

export default function (state = initialState, action) {

    switch (action.type) {

        case ACTION_TYPES.USER_AUTHORIZATION_RESPONSE: {
            if (!action.user) {
                return _.cloneDeep(initialState)
            }
            const navMap = new Map([
                [ROLE.ADMIN, [
                    new MenuItem('users', PATHS.AFFILIATE_DASHBOARD_USERS, 'users.svg'),
                ],],
                [ROLE.BUYER, [new MenuItem('My Contests', PATHS.AFFILIATE_DASHBOARD_CONTESTS,),
                    new MenuItem('Entries', PATHS.AFFILIATE_DASHBOARD_ENTRIES,)],],
                [ROLE.CREATIVE, [
                    new MenuItem('Contests', {
                        pathname: PATHS.AFFILIATE_DASHBOARD_CONTESTS,
                        search: queryString.stringify({
                            isActive: true,
                            winnerId: action.user.id,

                        }),
                    },),
                    new MenuItem('My Entries', {
                        pathname: PATHS.AFFILIATE_DASHBOARD_ENTRIES,
                        search: queryString.stringify({userId: action.user.id}),
                    },)],],
            ]);
            const nav = navMap.get(action.user.role);
            return nav ? nav : [];
        }
        case ACTION_TYPES.USER_AUTHORIZATION_ERROR: {
            return _.cloneDeep(initialState);
        }

        default: {
            return state;
        }

    }

}


