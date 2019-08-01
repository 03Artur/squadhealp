import {AUTHORIZATION_BEARER} from "../constants";


export const REGEXP = {

    CREDIT_CARD: {
        NUMBER: /^[0-9]{16}$/,
        EXPIRY: /^[01][0-9]\/[0-9]{2}$/,
        CVC: /^[0-9]{3}$/,
    },
    PASSWORD: /(?!.*?\s)(?=.*?[A-Z])(?=.*?[a-z])(?=.*[0-9])(?=^\w{8,}$)/,
    NAME: /^[A-Z][a-z]{0,50}$/,
    EMAIL: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    AUTHORIZATION_BEARER: new RegExp(`^${AUTHORIZATION_BEARER}`),
};