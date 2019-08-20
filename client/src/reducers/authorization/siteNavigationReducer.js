import ACTION_TYPES from "../../actions/actiontsTypes";
import {Menu, MenuItem} from "../../utils/classes/Link";
import {PATHS, ROLE, TASK_TYPE} from "../../constants";
import queryString from 'query-string';

const HOME_NAV = [
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


const initializeValue = {
    home: HOME_NAV,
};


function getNavByUser(user) {
    const NAV_MAP = new Map([
        [ROLE.ADMIN, {
            home: HOME_NAV,
            useItem: [
                new MenuItem('view dashboard', PATHS.AFFILIATE_DASHBOARD,),
            ],
            dashboard: [
                new MenuItem('users', PATHS.AFFILIATE_DASHBOARD_USERS, 'users.svg'),

            ],
        }],

        [ROLE.BUYER, {
            home: [
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
            ],
            homeUser: [new MenuItem("Dashboard", PATHS.AFFILIATE_DASHBOARD,),
                new MenuItem("My Account",),
                new MenuItem("Messages",),],
            dashboard: [new MenuItem('My Contests', PATHS.AFFILIATE_DASHBOARD_CONTESTS,),
                new MenuItem('Entries', PATHS.AFFILIATE_DASHBOARD_ENTRIES,)],
            dashboardUser: [],
        }],
        [
            ROLE.CREATIVE, {
            home: [
                new Menu('Active contests', [

                    new MenuItem('Assigned To Me', {
                        pathname: PATHS.AFFILIATE_DASHBOARD_CONTESTS,
                        search: queryString.stringify({
                            isActive: true,
                            winnerId: user.id,
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

            homeUser: [
                new MenuItem("View Dashboard",),
                new MenuItem("My Contests", {
                    pathname: PATHS.AFFILIATE_DASHBOARD_CONTESTS,
                    search: queryString.stringify({
                        isActive: true,
                        winnerId: user.id,
                    }),
                }),
                new MenuItem("My Account",),
                new MenuItem("My Activity Feed",),
                new MenuItem("Messages",),
                new MenuItem("Affiliate Dashboard", PATHS.AFFILIATE_DASHBOARD,),
            ],
            dashboard: [new MenuItem('Contests', {
                pathname: PATHS.AFFILIATE_DASHBOARD_CONTESTS,
                search: queryString.stringify({
                    isActive: true,
                    winnerId: user.id,

                }),
            },),
                new MenuItem('My Entries', {
                    pathname: PATHS.AFFILIATE_DASHBOARD_ENTRIES,
                    search: queryString.stringify({userId: user.id}),
                },)],
            dashboardUser: [],
        }],
    ]);

    return NAV_MAP.get(user.role);

}

export default function (state = initializeValue, action) {
    switch (action.types) {

        case ACTION_TYPES.USER_AUTHORIZATION_RESPONSE: {

            return getNavByUser(action.user);


        }
        default:
            return state;

    }
}
