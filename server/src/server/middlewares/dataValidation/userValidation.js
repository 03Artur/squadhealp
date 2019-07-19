import {BadRequestError} from './../../errors';
import {createUserSchema, updateUserSchema} from '../../utils/yupSchemas/userSchemas';

export async function createUserValidation(req, res, next) {
    try {
        console.log("createUserValidation")
        if (await createUserSchema.isValid(req.body)) {
            next();
        } else {
            next(new BadRequestError());
        }

    } catch (e) {
        next(new BadRequestError());
    }
}

export async function updateUserValidation(req, res, next) {
    try {
        if (await updateUserSchema.isValid(req.body)) {
            next();
        } else {
            next(new BadRequestError());
        }

    } catch (e) {
        next(new BadRequestError());
    }
}

