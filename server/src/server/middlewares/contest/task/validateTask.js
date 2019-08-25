import {BadRequestError} from '../../../errors';
import {createTaskSchema, updateTaskSchema} from '../../../utils/yupSchemas/contestSchemas';

export async function validateTaskOnCreate(req, res, next) {
    try {
        if (await createTaskSchema.isValid(req.body)) {

            return next();
        } else {
            return next(new BadRequestError());
        }
    } catch (e) {
        next(new BadRequestError());
    }
}

export async function validateTaskOnUpdate(req, res, next) {
    try {
        if (await updateTaskSchema.isValid(req.body)) {
            return next();
        } else {
            return next(new BadRequestError());
        }
    } catch (e) {
        next(new BadRequestError());
    }
}

