import  {Tasks, Entries, Contests} from '../../models';
import * as appError from "../../errors";
import {ROLES} from '../../constants';

export function checkCRUDPermission(req, res, next) {
    try {
        const {accessTokenPayload: actor, entry} = req;

        if (Entries.checkPermission(req.method, actor, entry | req.body)) {
            return next();
        }

        return next(new appError.ForbiddenError());

    } catch (e) {

    }
}

export async function checkRejectPermission(req, res, next) {
    try {
        const {accessTokenPayload: user,params: {contestId}} = req;
        if(user.role === ROLES.BUYER){

            const contest = await Contests.findByPk(contestId);
            if(contest && contest.userId === user.id){
                return next();
            }
        }

        return next(new appError.ForbiddenError())
    } catch (e) {
        next(e)
    }
}


