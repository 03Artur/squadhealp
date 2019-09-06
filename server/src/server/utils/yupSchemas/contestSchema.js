const yup = require('yup');
import {REGEXP} from '../regexp';

const strSchema = yup.string().matches(/.{1,255}/);

export const nameExistCreateContestSchema = yup.object({

    name: yup.string().required(),
    nameOf: yup.string().required(),
    description: yup.string().matches(REGEXP.CREDIT_CARD.CVC, {excludeEmptyString: true}).required(),
    typeOfIndustry: strSchema.required(),
    targetCustomers: strSchema.required(),

});

export const nameNotExistCreateContestSchema = yup.object({

    description: yup.string().matches(/.+/).required(),
    typeOfIndustry: strSchema.required(),
    targetCustomers: strSchema.required(),

});

export const updateNameExistContestSchema = yup.object({

    name: yup.string().notRequired(),
    nameOf: yup.string().notRequired(),
    description: yup.string().notRequired().matches(REGEXP.CREDIT_CARD.CVC),
    typeOfIndustry: strSchema,
    targetCustomers: strSchema,

});





