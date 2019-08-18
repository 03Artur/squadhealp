import {BadRequestError} from '../../errors';
import  creditCardSchema from '../../utils/yupSchemas/creditCardSchema';

export default async function validationCreateUser(req, res, next) {
    try {
        if (await creditCardSchema.isValid(req.body)) {
            res.send("Test check");
            return next();
        } else {
            return next(new BadRequestError());
        }

    } catch (e) {
        next(e);
    }
}