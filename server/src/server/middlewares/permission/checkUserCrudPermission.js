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
        if (!req.accessTokenPayload) {
            res.send([1, new ForbiddenError()]);
            return;
        }
        let objRole = null;
        if (req.method === 'POST') {
            objRole = req.body.role;
        } else {

            const obj = await User.findByPk(req.params.id);
            if (!obj) {
                res.send([2, new NotFoundError()]);
                return;
            }
            objRole = obj.role;
        }

        const {role: actorRole, id} = req.accessTokenPayload;
        console.log("=============================");
        console.log(req.accessTokenPayload);
        console.log("=============================");
        const isActToSelf = id === parseInt(req.params.id);
        if (checkPermission(isActToSelf, actorRole, objRole, ROLE_CRUD_USER_PERMISSIONS.get(req.method))) {
            res.send("All Right!")
        } else {
            res.send([3, new ForbiddenError()]);
        }

    } catch (e) {
        res.send([4, new ForbiddenError()]);
    }

}