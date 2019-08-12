import {Contests} from '../../models';
import appError from '../../errors';
import {ACTION} from '../../constants';

export default async function checkUserCrudContestPermissions(req, res, next) {
    try {

        let contest = null;
        if (req.method === ACTION.POST) {

            contest = req.body;

        } else {
            contest = await Contests.findByPk(parseInt(req.param.id));
            if (!contest) {
                return next(appError.NotFoundError())
            }
        }

        if (Contests.checkPermission(req.method, req.accessTokenPayload, contest)) {
            return next();
        } else {
            return next(new appError.ForbiddenError());
        }


    } catch (e) {
        return next(new appError.ForbiddenError());
    }
}


