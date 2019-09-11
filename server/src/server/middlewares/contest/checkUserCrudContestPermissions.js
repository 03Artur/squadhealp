import {Contests, Tasks} from '../../models';
import appError from '../../errors';
import {ACTION} from '../../constants';



export default async (req, res, next) => {
    try {

        const contest = req.params.id ? await Contests.findByPk(parseInt(req.params.id), {
            include: [{
                model: Tasks,
                as: 'tasks',
            }]
        }) : req.body;

        if (!contest) {
            return next(appError.NotFoundError())
        }

        if (Contests.checkPermission(req.method, req.accessTokenPayload, contest)) {

            req.contest = contest;
            return next();
        } else {
            return next(new appError.ForbiddenError("here"));
        }


    } catch (e) {
        return next(new appError.ForbiddenError());
    }
}


