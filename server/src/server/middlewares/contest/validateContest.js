import {BadRequestError} from '../../errors';
import {createContestTaskSchema, updateContestTaskSchema} from '../../utils/yupSchemas/contestSchemas';

export async function validateDataOnCreateContestTask(req, res, next) {
    try {
        if (await createContestTaskSchema.isValid(req.body)) {
            return next();
        } else {
            return next(new BadRequestError());
        }
    } catch (e) {
        next(new BadRequestError());
    }
}

export async function validateDataOnUpdateContestTask(req, res, next) {
    try {
        if (await updateContestTaskSchema.isValid(req.body)) {
            return next();
        } else {
            return next(new BadRequestError());
        }
    } catch (e) {
        next(new BadRequestError());
    }
}

