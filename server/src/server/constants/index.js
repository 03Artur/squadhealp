export const TASK_TYPE = {
    NAME: 'Name',
    TAGLINE: 'Tagline',
    LOGO: "Logo",
};

/**
 *
 * @enum {string}
 */

const ACTION = {
    CREATE: "POST",
    READ: "GET",
    UPDATE: "PUT",
    DELETE: "DELETE",
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

module.exports = {

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
        ]
    ),

    DEVICES_COUNT: 3,
    SALT_ROUND: 10,
    AUTHORIZATION_BEARER: 'Bearer ',
    TOKEN_PRIVATE_KEY: 'Welcome to the jungle',
    ACCESS_TOKEN_EXPIRES_IN: 60 * 60 * 24,
    REFRESH_TOKEN_EXPIRES_IN: (60 * 60 * 24 * 30),
};

