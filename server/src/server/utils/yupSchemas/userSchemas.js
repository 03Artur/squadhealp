const yup = require('yup')
import {REGEXP} from '../regexp'

const nameRule = yup.string().matches(REGEXP.NAME);
const emailRule = yup.string().email();
const passwordRule = yup.string().matches(REGEXP.PASSWORD);
const roleRule = yup.number().min(0).max(2);


export const createUserSchema = yup.object({
    firstName: nameRule.required(),
    lastName: nameRule.required(),
    email: emailRule.required(),
    password: passwordRule.required(),
    role: roleRule.required(),
});

export const updateUserSchema = yup.object({
    firstName: nameRule,
    lastName: nameRule,
    email: emailRule,
    password: passwordRule,
    role: roleRule,
});


