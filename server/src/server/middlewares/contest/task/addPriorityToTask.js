import {TASK_PRIORITY} from '../../../constants/index';
import appError from '../../../errors';


export default function addPriorityToTask(req, res, next) {
    try {
        const {type} = req.body;

        const priority = TASK_PRIORITY.get(type);
        if (!priority) {
            return next(new appError.BadRequestError());
        }
        req.body.priority = priority;
        return next();
    } catch (e) {
        return next(e)
    }

}



