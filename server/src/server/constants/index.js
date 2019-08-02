
export const CONTEST_TYPE = {
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
    CONTEST_TYPE,
    CONTEST_PRIORITY: new Map([
        [CONTEST_TYPE.TAGLINE, 8],
        [CONTEST_TYPE.LOGO, 9],
        [CONTEST_TYPE.NAME, 10],
    ]),
    CONTEST_COST: new Map([
            [CONTEST_TYPE.TAGLINE, 72.15],
            [CONTEST_TYPE.LOGO, 91.43],
            [CONTEST_TYPE.NAME, 100.0],
        ]
    )

    ,
    DEVICES_COUNT: 3,
    SALT_ROUND: 10,
    AUTHORIZATION_BEARER: 'Bearer ',
    TOKEN_PRIVATE_KEY: 'Welcome to the jungle',
    ACCESS_TOKEN_EXPIRES_IN: 10,
    REFRESH_TOKEN_EXPIRES_IN: (60 * 60 * 24 * 30),
};

