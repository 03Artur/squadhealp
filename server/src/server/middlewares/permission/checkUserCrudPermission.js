import {ForbiddenError, NotFoundError} from '../../errors';
import {ROLE_CRUD_USER_PERMISSIONS} from '../../utils/permissin_CRUD/userCrud';
import {User} from './../../models';
import {ROLE} from "../../constants";

function checkPermission(isActToSelf, actorRole, objRole, rule) {
    return isActToSelf ?
        rule.self.includes(actorRole) :
        rule.other.get(actorRole).includes(objRole);

}

export function isItAdmin(req, res, next) {

    try {
        const {role} = req.accessTokenPayload;
        if (role === ROLE.ADMIN) {
            return next();
        } else {
            return next(new ForbiddenError());
        }
    } catch (e) {
        next(new ForbiddenError());
    }

}

export default async function (req, res, next) {
    try {

        let objRole = null;
        if (req.method === 'POST') {
            objRole = req.body.role;
        } else {
            const obj = await User.findByPk(parseInt(req.params.id));
            if (!obj) {
                return next(new NotFoundError("User not found"));
                return;
            }
            objRole = obj.role;
        }

        const {role: actorRole, id} = req.accessTokenPayload;
        const isActToSelf = id === parseInt(req.params.id);

        if (checkPermission(isActToSelf, actorRole, objRole, ROLE_CRUD_USER_PERMISSIONS.get(req.method))) {
            return next();
        } else {
            return next(new ForbiddenError())
        }

    } catch (e) {
        next(new ForbiddenError());
    }

}