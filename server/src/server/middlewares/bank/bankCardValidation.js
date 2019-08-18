import {BadRequestError} from '../../errors';
import  creditCardSchema from '../../utils/yupSchemas/creditCardSchema';

export default async function validationCreateUser(req, res, next) {
    try {
        if (await creditCardSchema.isValid(req.body)) {

            return next();
        } else {
            return next(new BadRequestError());
        }

    } catch (e) {
        next(e);
    }
}