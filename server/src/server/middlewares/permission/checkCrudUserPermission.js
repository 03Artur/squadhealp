import {ForbiddenError, NotFoundError} from '../../errors';
import {Users} from './../../models';
import {ROLE, ACTION} from "../../constants";


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
        const obj = req.method.toUpperCase() === ACTION.CREATE ? req.body : (await Users.findByPk(req.params.id));



        if (!obj) {
            return next(new NotFoundError("Users not found"));
        }

        if (Users.checkPermission(req.method, req.accessTokenPayload, obj)) {
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