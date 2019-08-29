

export const LOCAL_STORAGE_KEYS = {
    ACCESS_TOKEN_KEY: 'ACCESS_TOKEN_KEY',
    REFRESH_TOKEN_KEY: 'REFRESH_TOKEN_KEY',
};

export const SOCKET_EVENTS = {
    CHAT_MESSAGE: 'CHAT_MESSAGE',
    RECEIVED_MESSAGE: "RECEIVED_MESSAGE",
    TYPING: "TYPING",
    NOTIFY_TYPING: "NOTIFY_TYPING",
    NOTIFY_STOP_TYPING: "NOTIFY_STOP_TYPING",
    STOP_TYPING: "STOP_TYPING",
    JOIN_ME_TO_ROOMS: 'JOIN_ME_TO_ROOMS',
};


export const PHONE_NUMBER = '(877)\u00A0355-3585';

export const AUTHORIZATION_MODE = {
    LOGIN_MODE: 'LOGIN_MODE',
    SIGN_UP_MODE: 'SIGN_UP_MODE',
};

export const ACCESS_TOKEN_BEARER = 'Bearer ';

export const CREATE_CONTEST_STEPS = {
    SELECT_TASK_TYPE: "SELECT_TASK_TYPE",
    CREATE_CONTEST: 'CREATE_CONTEST',
    CONTEST_PAYMENT: 'CONTEST_PAYMENT',
    CREATE_NAME_TASK: "CREATE_NAME_TASK",
    CREATE_LOGO_TASK: "CREATE_LOGO_TASK",
    CREATE_TAGLINE_TASK: "CREATE_TAGLINE_TASK",
};

const _PATHS = {
    HOME: '/',
    LOGIN: '/login',
    LOGOUT: '/logout',
    SIGN_UP: '/signup',
    AUTHORIZATION: '/authorization',
    ADMIN: '/admin',
    USERS: '/users',
    CONTEST: '/contest',
    CONTESTS: '/contests',
    ENTRIES: '/entries',
    BUSINESS: '/business',
    AFFILIATE_DASHBOARD: '/affiliate-dashboard',
    DASHBOARD: '/dashboard',
    TASK: '/task',
    PAYMENT: '/payment',
    TYPE: '/type',
    TEST: '/test',
    MESSAGES: '/messages',
    CHAT: '/chat',

};
_PATHS.CREATE_CONTEST = `${_PATHS.CONTEST}${_PATHS.BUSINESS}`;
_PATHS.CREATE_TASK = `${_PATHS.CONTEST}${_PATHS.TASK}`;
_PATHS.CONTEST_PAYMENT = `${_PATHS.CONTEST}${_PATHS.PAYMENT}`;
_PATHS.SELECT_TASK_TYPE = `${_PATHS.CONTEST}${_PATHS.TYPE}`;
_PATHS.AFFILIATE_DASHBOARD_CONTESTS = `${_PATHS.AFFILIATE_DASHBOARD}${_PATHS.CONTESTS}`;
_PATHS.AFFILIATE_DASHBOARD_ENTRIES = `${_PATHS.AFFILIATE_DASHBOARD}${_PATHS.ENTRIES}`;
_PATHS.AFFILIATE_DASHBOARD_CONTEST = `${_PATHS.AFFILIATE_DASHBOARD}${_PATHS.CONTEST}`;
_PATHS.AFFILIATE_DASHBOARD_USERS = `${_PATHS.AFFILIATE_DASHBOARD}${_PATHS.USERS}`;
_PATHS.MESSAGES_CHAT = `${_PATHS.MESSAGES}${_PATHS.CHAT}`;

export const PATHS = _PATHS;

export const testMenuItemStyle = {
    border: '2px solid #ff6542',
    borderCollapse: 'collapse',
    margin: '-1px 0'

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

export const TASK_TYPES_COMBINATION = [
    [TASK_TYPE.NAME],
    [TASK_TYPE.LOGO],
    [TASK_TYPE.TAGLINE],
    [TASK_TYPE.NAME, TASK_TYPE.LOGO],
    [TASK_TYPE.NAME, TASK_TYPE.TAGLINE],
    [TASK_TYPE.LOGO, TASK_TYPE.TAGLINE],
    [TASK_TYPE.NAME, TASK_TYPE.LOGO, TASK_TYPE.TAGLINE],
];

export const CONTEST_CREATION_ALL_STEPS = new Map([
    [CREATE_CONTEST_STEPS.SELECT_TASK_TYPE, {
        order: 0,
        path: PATHS.SELECT_TASK_TYPE,
        title: 'Start a contest',
        initialValues: {},
        progressTip: 'Select Contest Type',
        description: 'Launching a contest on Squadhelp is very simple. Select the type of contest you would like to launch from the list below. Provide a detailed brief and select a pricing package. Begin receiving submissions instantly!',

    }],
    [CREATE_CONTEST_STEPS.CREATE_CONTEST, {
        order: 1,
        path: PATHS.CREATE_CONTEST,


        initialValues: {},

        title: 'Describe Your Business',
        progressTip: 'Your Business',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab asperiores consequatur dolorem facilis inventore itaque mollitia nobis optio porro reiciendis. Aut cupiditate exercitationem minima porro voluptatum? A doloribus quas quis',

    }],
    [CREATE_CONTEST_STEPS.CREATE_NAME_TASK, {
        order: 2,
        path: `${PATHS.CREATE_TASK}`,
        initialValues: {
            type: TASK_TYPE.NAME,
        },
        title: 'Name',
        progressTip: 'Name',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab asperiores consequatur dolorem facilis inventore itaque mollitia nobis optio porro reiciendis. Aut cupiditate exercitationem minima porro voluptatum? A doloribus quas quis',

    }],
    [CREATE_CONTEST_STEPS.CREATE_LOGO_TASK, {
        order: 3,
        path: `${PATHS.CREATE_TASK}`,
        initialValues: {
            type: TASK_TYPE.LOGO,
        },
        title: 'Logo',
        progressTip: 'Logo',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab asperiores consequatur dolorem facilis inventore itaque mollitia nobis optio porro reiciendis. Aut cupiditate exercitationem minima porro voluptatum? A doloribus quas quis',

    }],
    [CREATE_CONTEST_STEPS.CREATE_TAGLINE_TASK, {
        order: 4,
        path: `${PATHS.CREATE_TASK}`,
        initialValues: {
            type: TASK_TYPE.TAGLINE,
        },
        title: 'Tagline',
        progressTip: 'Tagline',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab asperiores consequatur dolorem facilis inventore itaque mollitia nobis optio porro reiciendis. Aut cupiditate exercitationem minima porro voluptatum? A doloribus quas quis',

    }],
    [CREATE_CONTEST_STEPS.CONTEST_PAYMENT, {
        order: 5,
        initialValues: {},
        path: PATHS.CONTEST_PAYMENT,
        title: 'Payment',
        progressTip: 'Select Contest Type',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab asperiores consequatur dolorem facilis inventore itaque mollitia nobis optio porro reiciendis. Aut cupiditate exercitationem minima porro voluptatum? A doloribus quas quis',

    }],
]);

export const TASK_TYPE_DESCRIPTION = new Map([
    [TASK_TYPE.NAME, "Get up and running with the perfect name"],
    [TASK_TYPE.LOGO, "Kickstart your venture with a unique, memorable logo"],
    [TASK_TYPE.TAGLINE, "Connect deeply with your target audience with an on-target tagline"],
    [`${TASK_TYPE.NAME} + ${TASK_TYPE.LOGO}`, "Get the essentials needed to establish your brand together and save"],
    [`${TASK_TYPE.NAME} + ${TASK_TYPE.TAGLINE}`, "Communicate your vision with the perfect Name/Tagline combo"],
    [`${TASK_TYPE.LOGO} + ${TASK_TYPE.TAGLINE}`, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aperiam commodi'],
    [`${TASK_TYPE.NAME} + ${TASK_TYPE.LOGO} + ${TASK_TYPE.TAGLINE}`, "Establish your entire brand identity and save with this bundle"],
]);

export const FORM_NAMES = {
    CONTEST_FORM: 'contestForm',
    TASKS_FORM: 'taskForm',
    TASK_TYPE_FORM: 'taskTypeForm',
    PAYMENT_FORM: 'paymentForm',
    AUTHORIZATION_FORM: 'authorizationForm',
    TEST_FORM: 'testForm',
    MESSAGE_FORM: 'messageForm',
    CHAT_SEARCH_FORM: 'chatSearchForm',
};

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
]);

export const ROLE = {
    BUYER: "BUYER",
    CREATIVE: "CREATIVE",
    ADMIN: "ADMIN",
    GUEST: 'GUEST',
};





