import {chatYupSchema, messageYupSchema} from "../../utils/yupSchemas/chat";

export async function validateMessage(req, res, next) {
    try {

        await messageYupSchema.validate(req.body);

        return next();

    } catch (e) {
        return next(e);
    }

}

export async function validateChat(req, res, next) {
    try {

        await chatYupSchema.validate(req.body);
        return next();

    } catch (e) {
        return next(e);
    }

}
