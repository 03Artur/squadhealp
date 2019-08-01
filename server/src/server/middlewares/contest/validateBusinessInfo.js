import {BadRequestError} from '../../errors';
import {
    nameNotExistCreateBusinessInfoSchema,
    nameExistCreateBusinessInfoSchema,
    updateBusinessInfoSchema
} from '../../utils/yupSchemas/businessInfoSchema';

export async function validateDataOnCreateBusinessInfo(req, res, next) {
    try {
        const {isNameExist, businessInfo} = req.body;
        if (isNameExist && nameExistCreateBusinessInfoSchema.isValid(businessInfo)) {
            return next()
        } else if (!isNameExist && nameNotExistCreateBusinessInfoSchema.isValid(businessInfo)) {
            return next();
        } else {
            return next(new BadRequestError())
        }
    } catch (e) {
        next(new BadRequestError());
    }
}

export async function validateDataOnUpdateBusinessInfo(req, res, next) {
    try {
        if (await updateBusinessInfoSchema.isValid(req.body)) {
            return next();
        } else {
            return next(new BadRequestError());
        }
    } catch (e) {
        next(new BadRequestError());
    }
}

