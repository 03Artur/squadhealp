import {FavoriteTasks} from '../../models'
import * as appError from "../../errors";


export default function checkPermission(req, res, next) {
    try {
        const {accessTokenPayload: actor} = req;
        if (FavoriteTasks.checkPermission(actor)) {
            return next()
        }
        return next(new appError.ForbiddenError());

    } catch (e) {
        next(e)
    }

};