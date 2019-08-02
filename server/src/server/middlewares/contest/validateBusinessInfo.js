import {BadRequestError} from '../../errors';
import {
    nameNotExistCreateContestSchema,
    nameExistCreateContestSchema,
    updateContestSchema
} from '../../utils/yupSchemas/businessInfoSchema';

export async function validateDataOnCreateContest(req, res, next) {
    try {
        const {isNameExist, businessInfo} = req.body;
        if (isNameExist && nameExistCreateContestSchema.isValid(businessInfo)) {
            return next()
        } else if (!isNameExist && nameNotExistCreateContestSchema.isValid(businessInfo)) {
            return next();
        } else {
            return next(new BadRequestError())
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

