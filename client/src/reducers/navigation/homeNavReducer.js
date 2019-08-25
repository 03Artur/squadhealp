import ACTION_TYPES from "../../actions/actiontsTypes";
import {PATHS, ROLE, TASK_TYPE} from "../../constants";
import {Menu, MenuItem} from "../../utils/classes/Link";
import queryString from 'query-string';
import _ from 'lodash'
const initialState = [
    new Menu('Name Ideas', [
        [
            new MenuItem('Beauty'),
            new MenuItem('Consulting'),
            new MenuItem('E-Commerce'),
            new MenuItem('Fashion & Clothing'),
            new MenuItem('Finance'),
            new MenuItem('Real Estate'),
            new MenuItem('Tech'),
        ],
        [
            new MenuItem('More Categories'),
        ],

    ]),
    new Menu('Contests', [
        [
            new MenuItem('How it work'),
            new MenuItem('Pricing'),
            new MenuItem('Agency Services'),
        ],
        [
            new MenuItem('Active Contests'),
            new MenuItem('Winners'),
            new MenuItem('Leaderboard'),
        ],
        [
            new MenuItem('Become A Creative'),
        ],

    ]),
    new Menu('Our Work', [
        [
            new MenuItem('Names'),
            new MenuItem('Taglines'),
            new MenuItem('Logos'),
        ],
        [
            new MenuItem('Testimonials'),
        ],
    ]),
    new Menu('Names For Sale', [
        [
            new MenuItem('Popular Names'),
            new MenuItem('Short Names'),
            new MenuItem('Intriguing Names'),
            new MenuItem('Names By Category'),
            new MenuItem('Visual Name Generator'),
        ],
        [
            new MenuItem('Sell Your Domains'),
        ],
    ]),
    new Menu('Blog', [
        [
            new MenuItem('Ultimate Naming Guide'),
            new MenuItem('Poetic Devices in Business Naming'),
            new MenuItem('Crowded Bar Theory'),
        ],
        [
            new MenuItem('All Articles'),
        ],
    ]),
];

export default function (state = initialState, action) {

    switch (action.type) {

        case ACTION_TYPES.USER_AUTHORIZATION_RESPONSE: {
            if (!action.user) {
                return _.cloneDeep(initialState)
            }
            const navMap = new Map([
                [ROLE.ADMIN, [
                    new Menu('Name Ideas', [
                        [
                            new MenuItem('Beauty'),
                            new MenuItem('Consulting'),
                            new MenuItem('E-Commerce'),
                            new MenuItem('Fashion & Clothing'),
                            new MenuItem('Finance'),
                            new MenuItem('Real Estate'),
                            new MenuItem('Tech'),
                        ],
                        [
                            new MenuItem('More Categories'),
                        ],

                    ]),
                    new Menu('Contests', [
                        [
                            new MenuItem('How it work'),
                            new MenuItem('Pricing'),
                            new MenuItem('Agency Services'),
                        ],
                        [
                            new MenuItem('Active Contests', {
                                    pathname: PATHS.AFFILIATE_DASHBOARD_CONTESTS,
                                    search: queryString.stringify(
                                        {
                                            isActive: true,
                                        }
                                    )
                                }
                            ),
                            new MenuItem('Winners'),
                            new MenuItem('Leaderboard'),
                        ],
                        [new MenuItem('Become A Creative'),],

                    ]),
                    new Menu('Our Work', [
                        [
                            new MenuItem('Names'),
                            new MenuItem('Taglines'),
                            new MenuItem('Logos'),
                        ],
                        [
                            new MenuItem('Testimonials'),
                        ],
                    ]),
                    new Menu('Names For Sale', [
                        [
                            new MenuItem('Popular Names'),
                            new MenuItem('Short Names'),
                            new MenuItem('Intriguing Names'),
                            new MenuItem('Names By Category'),
                            new MenuItem('Visual Name Generator'),
                        ],
                        [
                            new MenuItem('Sell Your Domains'),
                        ],
                    ]),
                    new Menu('Blog', [
                        [
                            new MenuItem('Ultimate Naming Guide'),
                            new MenuItem('Poetic Devices in Business Naming'),
                            new MenuItem('Crowded Bar Theory'),
                        ],
                        [
                            new MenuItem('All Articles'),
                        ],
                    ]),
                ],],
                [ROLE.BUYER, [
                    new Menu('Name Ideas', [
                        [
                            new MenuItem('Beauty'),
                            new MenuItem('Consulting'),
                            new MenuItem('E-Commerce'),
                            new MenuItem('Fashion & Clothing'),
                            new MenuItem('Finance'),
                            new MenuItem('Real Estate'),
                            new MenuItem('Tech'),
                        ],
                        [
                            new MenuItem('More Categories'),
                        ],

                    ]),
                    new Menu('Contests', [
                        [
                            new MenuItem('How it work'),
                            new MenuItem('Pricing'),
                            new MenuItem('Agency Services'),
                        ],
                        [
                            new MenuItem('Active Contests', {
                                    pathname: PATHS.AFFILIATE_DASHBOARD_CONTESTS,
                                    search: queryString.stringify(
                                        {
                                            isActive: true,
                                        }
                                    )
                                }
                            ),
                            new MenuItem('Winners'),
                            new MenuItem('Leaderboard'),
                        ],
                        [new MenuItem('Become A Creative'),],

                    ]),
                    new Menu('Our Work', [
                        [
                            new MenuItem('Names'),
                            new MenuItem('Taglines'),
                            new MenuItem('Logos'),
                        ],
                        [
                            new MenuItem('Testimonials'),
                        ],
                    ]),
                    new Menu('Names For Sale', [
                        [
                            new MenuItem('Popular Names'),
                            new MenuItem('Short Names'),
                            new MenuItem('Intriguing Names'),
                            new MenuItem('Names By Category'),
                            new MenuItem('Visual Name Generator'),
                        ],
                        [
                            new MenuItem('Sell Your Domains'),
                        ],
                    ]),
                    new Menu('Blog', [
                        [
                            new MenuItem('Ultimate Naming Guide'),
                            new MenuItem('Poetic Devices in Business Naming'),
                            new MenuItem('Crowded Bar Theory'),
                        ],
                        [
                            new MenuItem('All Articles'),
                        ],
                    ]),
                ],],
                [ROLE.CREATIVE,

                    [
                    new Menu('Active contests',
                        [

                        new MenuItem('Assigned To Me', {
                            pathname: PATHS.AFFILIATE_DASHBOARD_CONTESTS,
                            search: queryString.stringify({
                                isActive: true,
                                winnerId: action.user.id,
                            }),
                        }),
                        new MenuItem('all', {
                            pathname: PATHS.AFFILIATE_DASHBOARD_CONTESTS,
                            search: queryString.stringify({
                                isActive: true,
                            }),
                        }),
                        new MenuItem('naming', {
                            pathname: PATHS.AFFILIATE_DASHBOARD_CONTESTS,
                            search: queryString.stringify({
                                isActive: true,
                                type: TASK_TYPE.NAME
                            }),
                        }),
                        new MenuItem('logos', {
                            pathname: PATHS.AFFILIATE_DASHBOARD_CONTESTS,
                            search: queryString.stringify({
                                isActive: true,
                                type: TASK_TYPE.LOGO,
                            }),
                        }),
                        new MenuItem('tagline', {
                            pathname: PATHS.AFFILIATE_DASHBOARD_CONTESTS,
                            search: queryString.stringify({
                                isActive: true,
                                type: TASK_TYPE.TAGLINE,
                            }),
                        }),
                    ]),
                    new Menu('explore', [
                        new MenuItem('names'),
                        new MenuItem('taglines'),
                        new MenuItem('logos'),
                    ]),
                    new Menu('Marketplace', [

                        new MenuItem('Marketplace Dashboard'),
                        new MenuItem('My Listings'),
                        new MenuItem('Explore Marketplace'),
                        new MenuItem('Learn More'),
                        new MenuItem('Help Articles'),

                    ]),
                    new Menu('winners', [

                        new MenuItem('Recent Winners'),
                        new MenuItem('Selected by SH'),
                        new MenuItem('Leaderboard (Contests Won)'),
                        new MenuItem('Leaderboard (High Ratings)'),
                        new MenuItem('Leaderboard (Rising Stars)'),
                        new MenuItem('Leaderboard (Split Awards)'),

                    ]),
                    new Menu('help', [
                        new MenuItem('FAQs'),
                        new MenuItem('Pricing'),
                        new MenuItem('Testimonials'),
                        new MenuItem('Contact Us'),
                    ]),
                ],


                ],
            ]);
            const nav = navMap.get(action.user.role);
            return nav ? nav : state;
        }
        case ACTION_TYPES.USER_AUTHORIZATION_ERROR: {
            return initialState;
        }

        default: {
            return state;
        }

    }

}


