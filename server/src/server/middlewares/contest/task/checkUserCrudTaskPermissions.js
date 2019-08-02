import {Contests, Tasks} from '../../../models';
import appError from '../../../errors';
import {ACTION} from '../../../constants';

export default async function checkUserCrudTaskPermissions(req, res, next) {
    try {


        const contest = await Contests.findByPk(parseInt(req.body.contestId));
        if (!contest) {
            return next(appError.NotFoundError())
        }

        if (contest.checkPermission(req.method, req.accessTokenPayload)) {
            return next();
        } else {
            return next(new appError.ForbiddenError());
        }


    } catch (e) {
        return next(new appError.ForbiddenError());
    }
}


