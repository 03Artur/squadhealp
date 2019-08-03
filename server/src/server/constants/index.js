export const TASK_TYPE = {
    NAME: 'Name',
    TAGLINE: 'Tagline',
    LOGO: "Logo",
};

/**
 *
 * @enum {string}
 */
let TASK_TYPE_INFO = new Map([
        [
            TASK_TYPE.NAME,
            {
                images: {
                    grey: 'nameGrey.png',
                    green: 'nameGreen.png',
                },
                description: "Get up and running with the perfect name.",
            }
        ],
        [
            TASK_TYPE.TAGLINE,
            {
                images: {
                    grey: 'taglineGrey.png',
                    green: 'taglineGreen.png',
                },
                description: "Connect deeply with your target audience with an on-target tagline",
            }
        ],
        [
            TASK_TYPE.LOGO,
            {
                images: {
                    grey: 'logoGrey.png',
                    green: 'logoGreen.png',
                },
                description: "Kickstart your venture with a unique, memorable logo",
            }
        ],
    ]
);


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

