import {TASK_COST} from '../../../constants/index';
import appError from '../../../errors';


export default function addCostToTask(req, res, next) {
    try {
        const {type} = req.body;

        const cost = TASK_COST.get(type);
        if (!cost) {
            return next(new appError.BadRequestError());
        }
        req.body.cost = cost;
        return next();
    } catch (e) {
        return next(e)
    }

}



