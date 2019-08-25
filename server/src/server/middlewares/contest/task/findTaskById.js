import {Tasks} from '../../../models'
import appError from '../../../errors'

export default async (req, res, next) => {
    try {
        req.task = await Tasks.findByPk(req.params.id);
        if (req.task) {
            return next(new appError.NotFoundError());
        }

        return next();


    } catch (e) {
        next(e)
    }
}