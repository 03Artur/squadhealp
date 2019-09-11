import {Tasks, Entries, Contests} from '../../models';
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
        next(e);
    }
}

export async function checkGrandOrRejectPermission(req, res, next) {
    try {
        const {accessTokenPayload: user, params: {id}} = req;
        if (user.role === ROLES.BUYER) {
            const [task] = await Tasks.findAll({
                include: [
                    {
                        model: Contests,
                        attributes: [],
                        as: 'contest',
                        where: {
                            userId: user.id,
                        }
                    },
                    {
                        model: Entries,
                        as: 'entries',
                        where: {
                            id: id,
                            isRejected: false,
                        }
                    }
                ]
            });
            if (task) {
                req.task = task;

                return next();
            }
        }

        return next(new appError.ForbiddenError())
    } catch (e) {
        next(e)
    }
}


