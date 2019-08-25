import ACTION_TYPES from "../../actions/actiontsTypes";
import {PATHS, ROLE, TASK_TYPE} from "../../constants";
import { MenuItem} from "../../utils/classes/Link";
import _ from 'lodash';
import {mdiAccountCircle,mdiDatabaseCheck,mdiAccountEdit,mdiFormatListBulleted,mdiEmail,mdiLogout} from '@mdi/js';
import queryString from 'query-string';

const initialState = [];

export default function (state = initialState, action) {

    switch (action.type) {

        case ACTION_TYPES.USER_AUTHORIZATION_RESPONSE: {
            if (!action.user) {
                return _.cloneDeep(initialState)
            }
            const {user} = action;
            const navMap = new Map([
                [ROLE.ADMIN, [
                    new MenuItem('users', PATHS.AFFILIATE_DASHBOARD_USERS, 'users.svg'),
                ],],
                [ROLE.BUYER, [
                    new MenuItem('My Dashboard', PATHS.DASHBOARD, mdiAccountCircle),
                    new MenuItem('My Contests', {
                        pathname: PATHS.CONTESTS,
                        search: queryString.stringify({
                            userId: user.id,
                        })
                    }, mdiDatabaseCheck),
                    new MenuItem('My account','#',  mdiAccountEdit),
                    new MenuItem('my entries',{
                        pathname: PATHS.ENTRIES,
                        search: queryString.stringify({
                            userId: user.id,
                        })
                    },mdiFormatListBulleted),
                    new MenuItem('messages','#',mdiEmail),
                    new MenuItem('logout',PATHS.LOGOUT,mdiLogout),

                ],],
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


