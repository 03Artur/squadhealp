import {ForbiddenError, NotFoundError} from '../../errors';
import {ROLE_CRUD_USER_PERMISSIONS} from '../../utils/permissin_CRUD/userCrud';
import {User} from './../../models';

function checkPermission(isActToSelf, actorRole, objRole, rule) {
    console.log({isActToSelf, actorRole, objRole, rule});
    return isActToSelf ?
        rule.self.includes(actorRole) :
        rule.other.get(actorRole).includes(objRole);

}

export default async function (req, res, next) {
    try {

        let objRole = null;
        if (req.method === 'POST') {
            objRole = req.body.role;
        } else {

            const obj = await User.findByPk(parseInt(req.params.id));
            if (!obj) {
                next(new NotFoundError("User not found"));
                return;
            }
            objRole = obj.role;
        }

        const {role: actorRole, id} = req.accessTokenPayload;
        const isActToSelf = id === parseInt(req.params.id);
        if (checkPermission(isActToSelf, actorRole, objRole, ROLE_CRUD_USER_PERMISSIONS.get(req.method))) {
            next();
        } else {
            next(new ForbiddenError())
        }

    } catch (e) {
        res.send(new ForbiddenError());
    }

}