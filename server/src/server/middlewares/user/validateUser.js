import {BadRequestError} from './../../errors';
import {createUserSchema, updateUserSchema} from '../../utils/yupSchemas/userSchemas';


export async function validateDataOnCreateUser(req, res, next) {
    try {
        if (await createUserSchema.isValid(req.body)) {
            return next();
        } else {
            return next(new BadRequestError());
        }

    } catch (e) {
        next(new BadRequestError());
    }
}

export async function validateDataOnUpdateUser(req, res, next) {
    try {
        if (await updateUserSchema.isValid(req.body)) {
            return next();
        } else {
            return next(new BadRequestError());
        }
    } catch (e) {
        next(new BadRequestError());
    }
}


