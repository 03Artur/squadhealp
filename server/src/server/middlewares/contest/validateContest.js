import {BadRequestError} from '../../errors';
import {
    nameNotExistCreateContestSchema,
    nameExistCreateContestSchema,
    updateNameExistContestSchema
} from '../../utils/yupSchemas/businessInfoSchema';

export async function validateContestOnCreate(req, res, next) {
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

export async function validateContestOnUpdate(req, res, next) {
    try {
        if (await updateNameExistContestSchema.isValid(req.body)) {
            return next();
        } else {
            return next(new BadRequestError());
        }
    } catch (e) {
        next(new BadRequestError());
    }
}

