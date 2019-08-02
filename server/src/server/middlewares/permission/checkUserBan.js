import {ForbiddenError} from './../../errors'

export default function (req, res, next) {

    try {

        if (req.user.isBanned) {
            return next(new ForbiddenError("User banned."));
        } else {
            return next();
        }
    } catch (e) {
        next(e);
    }
}