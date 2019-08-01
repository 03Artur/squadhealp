import {BadRequestError} from '../../errors';
import {createContestSchema, updateContestSchema} from '../../utils/yupSchemas/contestSchemas';

export async function validateDataOnCreateContest(req, res, next) {
    try {
        if (await createContestSchema.isValid(req.body)) {
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
        if (await updateContestSchema.isValid(req.body)) {
            return next();
        } else {
            return next(new BadRequestError());
        }
    } catch (e) {
        next(new BadRequestError());
    }
}

