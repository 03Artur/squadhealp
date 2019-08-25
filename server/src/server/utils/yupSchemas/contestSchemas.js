import {TASK_TYPE} from "../../constants";
const yup = require('yup');

const title = yup.string();
const style = yup.string();
const type = yup.string().oneOf(Object.values(TASK_TYPE));


export const createTaskSchema = yup.object({
    title: title.required(),
    style: style.required(),
    type: type.required(),
});

export const updateTaskSchema = yup.object({
    title,
    style,
    type,
});


