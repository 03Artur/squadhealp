import {Tasks} from '../../models'
import appError from '../../errors'

export default async (req, res, next) => {
    try {


        if (req.creditCard.balance < req.task.cost) {
            return next(new appError.BadRequestError());
        }
        return next();


    } catch (e) {
        next(e)
    }
}