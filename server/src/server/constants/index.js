import Rule from '../utils/permissions/classes/Rule';
import {ChatRule, MessageRule} from '../utils/permissions/classes/ChatRule';
import ActionRules from '../utils/permissions/classes/ActionRules';

export const TASK_TYPE = {
    NAME: 'Name',
    TAGLINE: 'Tagline',
    LOGO: "Logo",
};

const SOCKET_EVENTS = {

    AUTHORIZE_USER: "AUTHORIZE_USER",


    POST_MESSAGE: "POST_MESSAGE",
    GET_MESSAGE: "GET_MESSAGE",

    POST_CHAT: "POST_CHAT",
    GET_CHAT: 'GET_CHAT',

    TYPING: "TYPING",
    STOP_TYPING: "STOP_TYPING",
    NOTIFY_TYPING: "NOTIFY_TYPING",
    NOTIFY_STOP_TYPING: "NOTIFY_STOP_TYPING",

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
const ROLES = {
    BUYER: "BUYER",
    CREATIVE: "CREATIVE",
    ADMIN: "ADMIN",

};

const CHAT_ACTION_RULES = new ActionRules(
    [
        [ACTION.POST, new ChatRule([ROLES.ADMIN, ROLES.BUYER, ROLES.CREATIVE])],
        [ACTION.GET, new ChatRule([], true, true)],
        [ACTION.PUT, new ChatRule([], true)],
        [ACTION.DELETE, new ChatRule([ROLES.ADMIN,], true,)],

    ]
);

const MESSAGE_ACTION_RULES = new ActionRules(
    [
        [ACTION.POST, new MessageRule([], true, true)],
        [ACTION.GET, new MessageRule([], true, true)],
        [ACTION.PUT, new MessageRule([], true,)],
        [ACTION.DELETE, new MessageRule([ROLES.ADMIN], true)],
    ]
);


const ENTRY_ACTION_RULES = new ActionRules(
    [
        [ACTION.POST, new Rule([ROLES.CREATIVE])],
        [ACTION.GET, new Rule([ROLES.ADMIN, ROLES.BUYER, ROLES.CREATIVE], true)],
        [ACTION.PUT, new Rule([ROLES.ADMIN,], true)],
        [ACTION.DELETE, new Rule([ROLES.ADMIN,], true)],
    ]
);


const CONTEST_ACTION_RULES = new ActionRules(
    [
        [ACTION.POST, new Rule([ROLES.ADMIN, ROLES.BUYER], true)],
        [ACTION.GET, new Rule([ROLES.ADMIN, ROLES.BUYER, ROLES.CREATIVE], true)],
        [ACTION.PUT, new Rule([ROLES.ADMIN,], true)],
        [ACTION.DELETE, new Rule([ROLES.ADMIN,], true)],
    ]
);

const USERS_ACTION_RULES = new Map([
    [
        ROLES.ADMIN,
        new ActionRules(
            [
                [ACTION.POST, new Rule([ROLES.BUYER, ROLES.CREATIVE, ROLES.ADMIN])],
                [ACTION.GET, new Rule([ROLES.BUYER, ROLES.CREATIVE, ROLES.ADMIN], true)],
                [ACTION.PUT, new Rule([ROLES.BUYER, ROLES.CREATIVE], true)],
                [ACTION.DELETE, new Rule([ROLES.BUYER, ROLES.CREATIVE])],
                [ACTION.BAN, new Rule([ROLES.CREATIVE, ROLES.BUYER, ROLES.ADMIN])],

            ]
        )
    ],
    [
        ROLES.BUYER,
        new ActionRules(
            [
                [ACTION.GET, new Rule([ROLES.BUYER, ROLES.CREATIVE,], true)],
                [ACTION.PUT, new Rule([], true)],
            ]
        )
    ],
    [
        ROLES.CREATIVE,
        new ActionRules(
            [
                [ACTION.GET, new Rule([ROLES.BUYER, ROLES.CREATIVE,], true)],
                [ACTION.PUT, new Rule([], true)],
            ]
        ),
    ],
]);

module.exports = {
    USERS_ACTION_RULES,
    CONTEST_ACTION_RULES,
    ENTRY_ACTION_RULES,
    CHAT_ACTION_RULES,
    MESSAGE_ACTION_RULES,
    ROLES: ROLES,
    SOCKET_EVENTS,
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




