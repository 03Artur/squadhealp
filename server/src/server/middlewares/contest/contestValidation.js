import {BadRequestError} from '../../errors';
import {} from '../../utils/yupSchemas/contestSchemas';

export async function validateDataOnCreateContest(req, res, next) {
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

export async function validateDataOnUpdateContest(req, res, next) {
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

