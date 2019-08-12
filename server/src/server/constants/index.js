import Rule from '../utils/permissions/classes/Rule';
import ActionRules from '../utils/permissions/classes/ActionRules';

export const TASK_TYPE = {
    NAME: 'Name',
    TAGLINE: 'Tagline',
    LOGO: "Logo",
};



const ACTION = {
    POST: "POST",
    GET: "GET",
    PUT: "PUT",
    DELETE: "DELETE",
    BAN: "BAN",
};

/**
 *
 * @enum {string}
 */
const ROLE = {
    BUYER: "BUYER",
    CREATIVE: "CREATIVE",
    ADMIN: "ADMIN",

};

const ENTRY_ACTION_RULES = new ActionRules(
    [
        [ACTION.POST, new Rule([ROLE.CREATIVE])],
        [ACTION.GET, new Rule([ROLE.ADMIN, ROLE.BUYER, ROLE.CREATIVE], true)],
        [ACTION.PUT, new Rule([ROLE.ADMIN,], true)],
        [ACTION.DELETE, new Rule([ROLE.ADMIN,], true)],
    ]
);



const CONTEST_ACTION_RULES = new ActionRules(
    [
        [ACTION.POST, new Rule([ROLE.ADMIN, ROLE.BUYER])],
        [ACTION.GET, new Rule([ROLE.ADMIN, ROLE.BUYER, ROLE.CREATIVE], true)],
        [ACTION.PUT, new Rule([ROLE.ADMIN,], true)],
        [ACTION.DELETE, new Rule([ROLE.ADMIN,], true)],
    ]
);

const USERS_ACTION_RULES = new Map([
    [
        ROLE.ADMIN,
        new ActionRules(
            [
                [ACTION.POST, new Rule([ROLE.BUYER, ROLE.CREATIVE, ROLE.ADMIN])],
                [ACTION.GET, new Rule([ROLE.BUYER, ROLE.CREATIVE, ROLE.ADMIN], true)],
                [ACTION.PUT, new Rule([ROLE.BUYER, ROLE.CREATIVE], true)],
                [ACTION.DELETE, new Rule([ROLE.BUYER, ROLE.CREATIVE])],
                [ACTION.BAN, new Rule([ROLE.CREATIVE, ROLE.BUYER, ROLE.ADMIN])],

            ]
        )
    ],
    [
        ROLE.BUYER,
        new ActionRules(
            [
                [ACTION.GET, new Rule([ROLE.BUYER, ROLE.CREATIVE,], true)],
                [ACTION.PUT, new Rule([], true)],
            ]
        )
    ],
    [
        ROLE.CREATIVE,
        new ActionRules(
            [
                [ACTION.GET, new Rule([ROLE.BUYER, ROLE.CREATIVE,], true)],
                [ACTION.PUT, new Rule([], true)],
            ]
        ),
    ],
]);

module.exports = {
    USERS_ACTION_RULES,
    CONTEST_ACTION_RULES,
    ENTRY_ACTION_RULES,
    ROLE,
    SQUAD_HELP_BANK_CARD: {
        number: '0000111122223333',
        expiry: "12/99",
        cvc: "123",
    },
    ACTION,
    TASK_TYPE,
    TASK_PRIORITY: new Map([
        [TASK_TYPE.TAGLINE, 8],
        [TASK_TYPE.LOGO, 9],
        [TASK_TYPE.NAME, 10],
    ]),
    TASK_COST: new Map([
            [TASK_TYPE.TAGLINE, 72.15],
            [TASK_TYPE.LOGO, 91.43],
            [TASK_TYPE.NAME, 100.0],
        ]),
    MULTER_TIME_FORMAT: 'YYMMDDHHmmss',

    DEVICES_COUNT: 3,
    SALT_ROUND: 10,
    AUTHORIZATION_BEARER: 'Bearer ',
    TOKEN_PRIVATE_KEY: 'Welcome to the jungle',
    ACCESS_TOKEN_EXPIRES_IN: 60 * 60 * 24,
    REFRESH_TOKEN_EXPIRES_IN: (60 * 60 * 24 * 30),
};

