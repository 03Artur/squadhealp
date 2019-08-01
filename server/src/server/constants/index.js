/*export const ROLE = {
    BUYER: "BUYER",
    CREATIVE: "CREATIVE",
    ADMIN: "ADMIN",
};
export const SQUAD_HELP_BANK_CARD = {
    number: '0000111122223333',
    expiry: "12/99",
    cvc: "171",
};
export const CONTEST_TYPE = {
    NAME: 'Name',
    TAGLINE: 'Tagline',
    LOGO: "Logo",
};
export const CONTEST_PIORITY = new Map([
    [CONTEST_TYPE.TAGLINE, 8],
    [CONTEST_TYPE.LOGO, 9],
    [CONTEST_TYPE.NAME, 10],
]);
export const DEVICES_COUNT = 3;
export const SALT_ROUND = 10;
export const AUTHORIZATION_BEARER = 'Bearer ';
export const TOKEN_PRIVATE_KEY = 'Welcome to the jungle';
export const ACCESS_TOKEN_EXPIRES_IN = 10;
export const REFRESH_TOKEN_EXPIRES_IN = (60 * 60 * 24 * 30);*/
const CONTEST_TYPE = {
    NAME: 'Name',
    TAGLINE: 'Tagline',
    LOGO: "Logo",
};

module.exports = {
    ROLE: {
        BUYER: "BUYER",
        CREATIVE: "CREATIVE",
        ADMIN: "ADMIN",
    },
    SQUAD_HELP_BANK_CARD: {
        number: '0000111122223333',
        expiry: "12/99",
        cvc: "123",
    },
    CONTEST_TYPE,
    CONTEST_PRIORITY: new Map([
        [CONTEST_TYPE.TAGLINE, 8],
        [CONTEST_TYPE.LOGO, 9],
        [CONTEST_TYPE.NAME, 10],
    ]),
    DEVICES_COUNT: 3,
    SALT_ROUND: 10,
    AUTHORIZATION_BEARER: 'Bearer ',
    TOKEN_PRIVATE_KEY: 'Welcome to the jungle',
    ACCESS_TOKEN_EXPIRES_IN: 10,
    REFRESH_TOKEN_EXPIRES_IN: (60 * 60 * 24 * 30),
};

