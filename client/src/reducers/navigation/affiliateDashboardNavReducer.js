import ACTION_TYPES from "../../actions/actiontsTypes";
import {PATHS, ROLE, TASK_TYPE} from "../../constants";
import {Menu, MenuItem} from "../../utils/classes/Link";
import queryString from 'query-string';
import _ from 'lodash';
import {
    mdiApps,
    mdiContentCopy,
    mdiSpeedometer,
    mdiAccountCircle,
    mdiDatabaseCheck,
    mdiAccountEdit,
    mdiFormatListBulleted,
    mdiEmail,
    mdiLogout
} from '@mdi/js';

const initialState = {

    navItems: []
};

export default function (state = initialState, action) {

    switch (action.type) {

        case ACTION_TYPES.USER_AUTHORIZATION_RESPONSE: {
            if (!action.user) {
                return _.cloneDeep(initialState)
            }
            const {user} = action;
            const navMap = new Map([
                [
                    ROLE.ADMIN, [
                    new MenuItem('users', PATHS.AFFILIATE_DASHBOARD_USERS, 'users.svg'),
                ],
                ],
                [
                    ROLE.BUYER, [
                    new Menu('Dashboards', [
                        new MenuItem('Account'),
                        new MenuItem('Marketplace'),
                    ], mdiSpeedometer),
                    new Menu('Contests', [
                        new MenuItem('Active contests', {
                            pathname: PATHS.AFFILIATE_DASHBOARD_CONTESTS,
                            search: queryString.stringify({userId: action.user.id, isPaid: true,})
                        }),
                        new MenuItem('Ending Soon',),
                        new MenuItem('Not Yet Participated',),
                        new MenuItem('My Participated Contests',),
                    ], mdiApps),
                   /* new Menu('Entries', [
                        new MenuItem('All', {
                            pathname: PATHS.AFFILIATE_DASHBOARD_ENTRIES,
                            search: queryString.stringify({
                                userId: user.id,
                            })
                        }),
                        new MenuItem('Winning', {
                            pathname: PATHS.AFFILIATE_DASHBOARD_ENTRIES,
                            search: queryString.stringify({
                                userId: user.id,
                                winning: true,
                            })
                        }),
                        new MenuItem('Rejected', {
                            pathname: PATHS.AFFILIATE_DASHBOARD_ENTRIES,
                            search: queryString.stringify({
                                userId: user.id,
                                isRejected: true,
                            })
                        }),
                    ], mdiContentCopy),*/


                ],],
                [
                    ROLE.CREATIVE, [
                    new Menu('Dashboards', [
                        new MenuItem('Account'),
                        new MenuItem('Marketplace'),
                    ], mdiSpeedometer),
                    new Menu('Contests', [
                        new MenuItem('Active', {
                            pathname: PATHS.AFFILIATE_DASHBOARD_CONTESTS,
                            search: queryString.stringify({
                                isPaid: true,
                            }),
                        },), new MenuItem('Win', {
                            pathname: PATHS.AFFILIATE_DASHBOARD_CONTESTS,
                            search: queryString.stringify({
                                winnerId: action.user.id,
                                isPaid: true,
                            }),
                        },),

                    ], mdiFormatListBulleted),
                    new Menu('My Entries', [
                        new MenuItem('All', {
                            pathname: PATHS.AFFILIATE_DASHBOARD_ENTRIES,
                            search: queryString.stringify({userId: action.user.id,}),
                        },),
                        new MenuItem('Rejected', {
                            pathname: PATHS.AFFILIATE_DASHBOARD_ENTRIES,
                            search: queryString.stringify({userId: action.user.id, isRejected: true}),
                        },),
                        new MenuItem('Winning', {
                            pathname: PATHS.AFFILIATE_DASHBOARD_ENTRIES,
                            search: queryString.stringify({userId: action.user.id, isWinning: true}),
                        },),

                    ], mdiContentCopy),],
                ],
            ]);
            const navItems = navMap.get(action.user.role);
            return {
                navItems: navItems ? navItems : [],
            }
        }
        case ACTION_TYPES.USER_AUTHORIZATION_ERROR: {
            return _.cloneDeep(initialState);
        }

        default: {
            return state;
        }

    }

}


