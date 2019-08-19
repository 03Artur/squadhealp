import ACTION_TYPES from '../../actions/actiontsTypes';
import {COMPLEX_PATH, PATH, ROLE} from "../../constants";
import {Menu, MenuItem} from "../../utils/classes/Link";


const initialState = {
    user: null,
    isFetching: false,
    error: null,
    nav: {},
};



const NAV_MAP = new Map([
    [ROLE.ADMIN, {
        dashboard: [
            new MenuItem('users', COMPLEX_PATH.DASHBOARD_USERS, 'users.svg'),

        ],
        home: [],
        useItem: [
            new MenuItem('view dashboard', PATH.DASHBOARD,),
        ],
    }],
    [ROLE.BUYER, {
        home: [
            new Menu('Name Ideas', [

                new Menu('', [
                    new MenuItem('Beauty'),
                    new MenuItem('Consulting'),
                    new MenuItem('E-Commerce'),
                    new MenuItem('Fashion & Clothing'),
                    new MenuItem('Finance'),
                    new MenuItem('Real Estate'),
                    new MenuItem('Tech'),
                ]),
                new Menu(null, [
                    new MenuItem('More Categories'),
                ]),

            ]),
            new Menu('Contests', [
                new Menu('', [
                    new MenuItem('How it work'),
                    new MenuItem('Pricing'),
                    new MenuItem('Agency Services'),
                ]),
                new Menu('', [
                    new MenuItem('Active Contests'),
                    new MenuItem('Winners'),
                    new MenuItem('Leaderboard'),
                ]),
                new Menu('', [
                    new MenuItem('Become A Creative'),
                ]),

            ]),
            new Menu('Our Work', [
                new Menu('', [
                    new MenuItem('Names'),
                    new MenuItem('Taglines'),
                    new MenuItem('Logos'),
                ]),
                new Menu('', [
                    new MenuItem('Testimonials'),
                ]),
            ]),
            new Menu('Names For Sale', [
                new Menu('', [
                    new MenuItem('Popular Names'),
                    new MenuItem('Short Names'),
                    new MenuItem('Intriguing Names'),
                    new MenuItem('Names By Category'),
                    new MenuItem('Visual Name Generator'),
                ]),
                new Menu('', [
                    new MenuItem('Sell Your Domains'),
                ]),
            ]),
            new Menu('Blog', [
                new Menu('', [
                    new MenuItem('Ultimate Naming Guide'),
                    new MenuItem('Poetic Devices in Business Naming'),
                    new MenuItem('Crowded Bar Theory'),
                ]),
                new Menu('', [
                    new MenuItem('All Articles'),
                ]),
            ]),
        ],
    }],
    [ROLE.CREATIVE, {

    }],
    [ROLE.GUEST, {}]
]);


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