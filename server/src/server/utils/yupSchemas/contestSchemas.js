import {CONTEST_TYPE} from "../../constants";
const yup = require('yup');

const title = yup.string();
const style = yup.string();
const type = yup.oneOf(Object.values(CONTEST_TYPE));


export const createContestSchema = yup.object({
    businessInfoId: yup.number().integer().required().min(0),
    title: title.required(),
    style: style.required(),
    type: type.required(),

});

export const updateContestSchema = yup.object({
    title,
    style,
    type,
});


