const yup = require('yup');



export const messageYupSchema = yup.object({
    message: yup.string().min(1).max(512).required(),

});

export const chatYupSchema =yup.object({

    participants: yup.array().of( yup.number().positive().integer()).required(),


});
