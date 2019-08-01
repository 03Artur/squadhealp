import {BadRequestError} from './../../errors';
import {createUserSchema, updateUserSchema} from '../../utils/yupSchemas/userSchemas';


export async function validationCreateUser(req, res, next) {
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

export async function validationUpdateUser(req, res, next) {
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


