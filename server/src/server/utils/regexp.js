
import {ROLE,AUTHORIZATION_BAERER} from "./constants";

const rolePattern = `^[${ROLE.ADMIN}-${ROLE.CREATIVE}]$`;
const tokenBaererPattern = `^${AUTHORIZATION_BAERER}`;

export const REGEXP = {
    PASSWORD: /(?!.*?\s)(?=.*?[A-Z])(?=.*?[a-z])(?=.*[0-9])(?=^\w{8,}$)/,
    NAME: /^[A-Z][a-z]{0,50}$/,
    EMAIL: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    ROLE: new RegExp(rolePattern),
    AUTHORIZATION_BEARER: new RegExp(tokenBaererPattern),

};