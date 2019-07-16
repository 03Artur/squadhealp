import {BadRequestError} from './../../errors';
import {createUserSchema, updateUserSchema} from '../../utils/yupSchemas/userSchemas';

export async function createUserValidation(req, res, next) {
    try {
        await createUserSchema.isValid(req.body);
        next()

    } catch (e) {
        next(new BadRequestError());
    }
}

export async function updateUserValidation(req, res, next) {
    try {
        await updateUserSchema.isValid(req.body);
        next()

    } catch (e) {
        next(new BadRequestError());
    }
}