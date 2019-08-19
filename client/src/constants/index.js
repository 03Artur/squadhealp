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

export const CREATE_CONTEST_STEPS = {
    SELECT_TASK_TYPE: "SELECT_TASK_TYPE",
    CREATE_CONTEST: 'CREATE_CONTEST',
    CONTEST_PAYMENT: 'CONTEST_PAYMENT',
    CREATE_NAME_TASK: "CREATE_NAME_TASK",
    CREATE_LOGO_TASK: "CREATE_LOGO_TASK",
    CREATE_TAGLINE_TASK: "CREATE_TAGLINE_TASK",
};

export const PATH = {
    HOME: '/',
    LOGIN: '/login',
    SIGN_UP: '/signup',
    AUTHORIZATION: '/authorization',
    ADMIN: '/admin',
    USERS: '/users',
    CONTEST: '/contest',
    CONTESTS: '/contests',
    BUSINESS: '/business',
    DASHBOARD: '/dashboard',
    TASK: '/task',
    PAYMENT: '/payment',
    TYPE: '/type',
    TEST: '/test'

};

export const COMPLEX_PATH = {
    CREATE_CONTEST: `${PATH.CONTEST}${PATH.BUSINESS}`,
    CREATE_TASK: `${PATH.CONTEST}${PATH.TASK}`,
    CONTEST_PAYMENT: `${PATH.CONTEST}${PATH.PAYMENT}`,
    SELECT_TASK_TYPE: `${PATH.CONTEST}${PATH.TYPE}`,


    DASHBOARD_CONTESTS: `${PATH.DASHBOARD}${PATH.CONTESTS}`,
    DASHBOARD_CONTEST: `${PATH.DASHBOARD}${PATH.CONTEST}`,

    DASHBOARD_USERS: `${PATH.DASHBOARD}${PATH.USERS}`,
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

export const CONTEST_CREATION_ALL_STEPS = new Map([
    [CREATE_CONTEST_STEPS.SELECT_TASK_TYPE, {
        queryKey: 'types',
        order: 0,
        path: COMPLEX_PATH.SELECT_TASK_TYPE,
        title: 'Start a contest',
        initialValues: {},
        progressTip: 'Select Contest Type',
        description: 'Launching a contest on Squadhelp is very simple. Select the type of contest you would like to launch from the list below. Provide a detailed brief and select a pricing package. Begin receiving submissions instantly!',

    }],
    [CREATE_CONTEST_STEPS.CREATE_CONTEST, {
        queryKey: 'contestId',
        order: 1,
        path: COMPLEX_PATH.CREATE_CONTEST,


        initialValues: {

        },

        title: 'Describe Your Business',
        progressTip: 'Your Business',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab asperiores consequatur dolorem facilis inventore itaque mollitia nobis optio porro reiciendis. Aut cupiditate exercitationem minima porro voluptatum? A doloribus quas quis',

    }],
    [CREATE_CONTEST_STEPS.CREATE_NAME_TASK, {
        queryKey: 'Name',
        order: 2,
        path: `${COMPLEX_PATH.CREATE_TASK}`,
        initialValues: {
            type: TASK_TYPE.NAME,
        },
        title: 'Name',
        progressTip: 'Name',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab asperiores consequatur dolorem facilis inventore itaque mollitia nobis optio porro reiciendis. Aut cupiditate exercitationem minima porro voluptatum? A doloribus quas quis',

    }],
    [CREATE_CONTEST_STEPS.CREATE_LOGO_TASK, {
        queryKey: 'Logo',
        order: 3,
        path: `${COMPLEX_PATH.CREATE_TASK}`,
        initialValues: {
            type: TASK_TYPE.LOGO,
        },
        title: 'Logo',
        progressTip: 'Logo',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab asperiores consequatur dolorem facilis inventore itaque mollitia nobis optio porro reiciendis. Aut cupiditate exercitationem minima porro voluptatum? A doloribus quas quis',

    }],
    [CREATE_CONTEST_STEPS.CREATE_TAGLINE_TASK, {
        queryKey: 'Tagline',
        order: 4,
        path: `${COMPLEX_PATH.CREATE_TASK}`,
        initialValues: {
            type: TASK_TYPE.TAGLINE,
        },
        title: 'Tagline',
        progressTip: 'Tagline',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab asperiores consequatur dolorem facilis inventore itaque mollitia nobis optio porro reiciendis. Aut cupiditate exercitationem minima porro voluptatum? A doloribus quas quis',

    }],
    [CREATE_CONTEST_STEPS.CONTEST_PAYMENT, {
        queryKey: 'isPaid',
        order: 5,
        initialValues: {},
        path: COMPLEX_PATH.CONTEST_PAYMENT,
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

export const ROLE_STRING = new Map([
    [ROLE.ADMIN, 'admin'],
    [ROLE.CREATIVE, 'creative'],
    [ROLE.BUYER, 'buyer'],
]);

