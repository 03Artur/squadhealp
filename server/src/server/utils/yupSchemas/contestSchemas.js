import {ROLE} from "../../constants";

const yup = require('yup');
import {REGEXP} from '../regexp';

const title = yup.string().matches(REGEXP.NAME);
const style = yup.string().email();
const passwordRule = yup.string().matches(REGEXP.PASSWORD);
const roleRule = yup.string().oneOf(Object.values(ROLE));


export const createContestSchema = yup.object({
    firstName: nameRule.required(),
    lastName: nameRule.required(),
    email: emailRule.required(),
    password: passwordRule.required(),
    role: roleRule.required(),
});

export const updateContestSchema = yup.object({
    firstName: nameRule,
    lastName: nameRule,
    email: emailRule,
    password: passwordRule,
    role: roleRule,
});


