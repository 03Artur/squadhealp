import {ForbiddenError, NotFoundError} from '../../errors';
import {User} from './../../models';
import {ROLE} from "../../constants";



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
        let obj = null;
        if (req.method === ACTION.CREATE) {
            obj = req.body;
        } else {
            obj = await User.findByPk(parseInt(req.params.id));
            if (!obj) {
                return next(new NotFoundError("User not found"));
            }
        }
        if (User.checkPermission(req.method, req.accessTokenPayload, obj)) {
            next()
        } else {
            next(new ForbiddenError())
        }

    } catch (e) {
        next(new ForbiddenError());
    }

};