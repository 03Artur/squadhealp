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
    USERS: '/users'
};
export const FORM_ROLE_VALUES = {
    GUEST: '0',
    BUYER: '1',
    CREATIVE: '2',
    ADMIN: '7',
};
export const ROLE = {
    GUEST: 0,
    BUYER: 1,
    CREATIVE: 2,
    ADMIN: 7,
}
export const ROLE_STRING = new Map([
    [FORM_ROLE_VALUES.ADMIN, 'admin'],
    [FORM_ROLE_VALUES.CREATIVE, 'creative'],
    [FORM_ROLE_VALUES.BUYER, 'buyer'],

]);

