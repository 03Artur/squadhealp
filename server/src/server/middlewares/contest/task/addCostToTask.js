import {TASK_COST} from '../../../constants/index';
import appError from '../../../errors';


export default function addCostToTask(req, res, next) {
    try {
        const {type} = req.body;

        const cost = TASK_COST.get(type);
        if (cost) {
            req.body.cost = cost;

            return next();
        }

        return next(new appError.BadRequestError());

    } catch (e) {
        return next(e)
    }

}



