const yup = require('yup');
import {REGEXP} from '../regexp';

const strSchema = yup.string().matches(/.{1,255}/);

export const nameExistCreateBusinessInfoSchema = yup.object({

    name: yup.string().required(),
    type: yup.string().required(),
    description: yup.string().matches(REGEXP.CREDIT_CARD.CVC, {excludeEmptyString: true}.required()),
    typeOfIndustry: strSchema.required(),
    targetCustomers: strSchema.required(),

});

export const nameNotExistCreateBusinessInfoSchema = yup.object({

    description: yup.string().matches(/.+/).required(),
    typeOfIndustry: strSchema.required(),
    targetCustomers: strSchema.required(),

});

export const updateBusinessInfoSchema = yup.object({

    name: yup.string().notRequired(),
    type: yup.string().notRequired(),
    description: yup.string().notRequired().matches(REGEXP.CREDIT_CARD.CVC),
    typeOfIndustry: strSchema,
    targetCustomers: strSchema,

});




