export const LOCAL_STORAGE_KEYS = {
    ACCESS_TOKEN_KEY: 'ACCESS_TOKEN_KEY',
    REFRESH_TOKEN_KEY: 'REFRESH_TOKEN_KEY',

};
export const PHONE_NUMBER = '(877)\u00A0355-3585';

export const AUTHORIZATION_MODE = {
    LOGIN_MODE: 'LOGIN_MODE',
    SIGN_UP_MODE: 'SIGN_UP_MODE',
};

export const ACCESS_TOKEN_BEARER = 'Bearer ';





export const PATH = {
    HOME: '/',
    LOGIN: '/login',
    SIGN_UP: '/signup',
    AUTHORIZATION: '/authorization',
    ADMIN: '/admin',
    USERS: '/users',
    CONTEST: '/contest',
    BUSINESS: '/business',
    DASHBOARD: '/dashboard',
    TASK: '/task,',
    PAYMENT: '/payment',
    TYPE:'/type'

};

export const COMPLEX_PATH = {
    CREATE_CONTEST: `${PATH.CONTEST}${PATH.BUSINESS}`,
    CREATE_TASK: `${PATH.CONTEST}${PATH.TASK}`,
    TASK_PAYMENT: `${PATH.CONTEST}${PATH.PAYMENT}`,
    SELECT_TASK_TYPE: `${PATH.CONTEST}${PATH.TYPE}`
};

export const TASK_TYPE = {
    NAME: 'Name',
    LOGO: "Logo",
    TAGLINE: "Tagline",
};

export const NAME_TYPE = {
    COMPANY: 'Company',
    PRODUCT: 'Product',
    PROJECT: 'Project',
};

export const TASK_TYPE_DESCRIPTION = new Map([
    [TASK_TYPE.NAME, "Get up and running with the perfect name"],
    [TASK_TYPE.LOGO, "Kickstart your venture with a unique, memorable logo"],
    [TASK_TYPE.TAGLINE, "Connect deeply with your target audience with an on-target tagline"],
    [TASK_TYPE.NAME + " + " + TASK_TYPE.LOGO, "Get the essentials needed to establish your brand together and save"],
    [TASK_TYPE.NAME + " + " + TASK_TYPE.TAGLINE, "Communicate your vision with the perfect Name/Tagline combo"],
    [TASK_TYPE.NAME + " + " + TASK_TYPE.LOGO + " + " + TASK_TYPE.TAGLINE, "Establish your entire brand identity and save with this bundle"],
]);
export const TASK_TYPE_IMAGES = new Map([
        [
            TASK_TYPE.NAME,
            {
                defaultImg: 'nameGrey.png',
                hoverImg: 'nameGreen.png',
            },
        ],
        [
            TASK_TYPE.TAGLINE, {

            defaultImg: 'taglineGrey.png',
            hoverImg: 'taglineGreen.png',
        }
        ],
        [
            TASK_TYPE.LOGO,
            {

                defaultImg: 'logoGrey.png',
                hoverImg: 'logoGreen.png',

            }
        ],
    ]
);

export const ROLE = {
    BUYER: "BUYER",
    CREATIVE: "CREATIVE",
    ADMIN: "ADMIN",

};
export const ROLE_STRING = new Map([
    [ROLE.ADMIN, 'admin'],
    [ROLE.CREATIVE, 'creative'],
    [ROLE.BUYER, 'buyer'],
]);

