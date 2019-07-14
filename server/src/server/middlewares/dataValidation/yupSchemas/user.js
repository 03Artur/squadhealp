import yup from 'yup';
import {REGEXP} from '../../../utils/regexp'

const nameRule = yup.string().min(1).max(50);
const emailRule = yup.string().email();
const passwordRule = yup.string().matches(REGEXP.PASSWORD);
const roleRule = yup.number().min(0).max(2);


const userSchema = yup.object({
    firstName: nameRule.required(),
    lastName: nameRule.required(),
    email: emailRule.required(),
    password: passwordRule.required(),
    role: roleRule.required(),
});


export default userSchema