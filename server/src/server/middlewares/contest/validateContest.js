import {BadRequestError} from '../../errors';
import {
    nameNotExistCreateContestSchema,
    nameExistCreateContestSchema,
    updateNameExistContestSchema
} from '../../utils/yupSchemas/businessInfoSchema';

export async function validateContestOnCreate(req, res, next) {
    try {
        const {contest} = req.body;

        const validateSchema =  req.body.isNameExist ? nameExistCreateContestSchema : nameNotExistCreateContestSchema;

        if (validateSchema.isValid(contest)) {

            return next()
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

