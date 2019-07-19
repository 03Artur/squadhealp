import {ForbiddenError} from './../../errors'

export default function (req, res, next) {

    try {
        if (req.user.isBanned) {
            next(new ForbiddenError("User banned."));
        } else {
            next();
        }
    } catch (e) {
        next(e);
    }
}