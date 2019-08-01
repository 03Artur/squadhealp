
const yup = require('yup');
import {REGEXP} from '../regexp';

export const nameExistBusinessInfoSchema =  yup.object({
    name: yup.string().required(),
    type: yup.string().required(),
    description: yup.string().matches(REGEXP.CREDIT_CARD.CVC, { excludeEmptyString: true }.required()),
    typeOfIndustry: yup.string().required(),
    targetCustomers: yup.string().required(),

});

export const nameNotExistBusinessInfoSchema =  yup.object({

    description: yup.string().matches(REGEXP.CREDIT_CARD.CVC, { excludeEmptyString: true }.required()),
    typeOfIndustry: yup.string().required(),
    targetCustomers: yup.string().required(),

});




