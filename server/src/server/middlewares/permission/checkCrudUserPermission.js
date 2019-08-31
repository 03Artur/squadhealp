import {ForbiddenError, NotFoundError} from '../../errors';
import {Users} from './../../models';
import {ROLES, ACTION, USERS_ACTION_RULES} from "../../constants";
import appError from "../../errors";


export function isItAdmin(req, res, next) {

    try {
        const {role} = req.accessTokenPayload;
        if (role === ROLES.ADMIN) {
            return next();
        } else {
            return next(new ForbiddenError());
        }
    } catch (e) {
        next(new ForbiddenError());
    }

}

export const checkBanPermission = async (req, res, next) => {
    try {

        const {role} = req.accessTokenPayload;

        const actorActionRules = USERS_ACTION_RULES.get(role);
        const banRule = actorActionRules.rules.get(ACTION.BAN);
        if (banRule) {

            const obj = await Users.findByPk(req.params.id);

            if (obj.canActToMe(ACTION.BAN, req.accessTokenPayload)) {
                req.user = obj;
                return next();
            }

        }
        next(new appError.ForbiddenError());
    } catch (e) {
        next(new appError.ForbiddenError())
    }
};


export default async function (req, res, next) {
    try {
        const obj = req.method.toUpperCase() === ACTION.POST ? req.body : (await Users.findByPk(req.params.id));


        if (!obj) {
            return next(new NotFoundError("Users not found"));
        }

        if (Users.canIAct(req.method, req.accessTokenPayload, obj)) {
            /*
                        res.send({allRight:true});
            */
            next()
        } else {
            next(new ForbiddenError())
        }

    } catch (e) {
        next(e);
    }

};