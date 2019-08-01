import {User} from './../../models';
import {NotFoundError} from './../../errors';

export default async function (req, res, next) {
    try {
        req.user = await User.findOne({
            where: {
                email: req.body.email
            },
            attributes: {
                exclude: ["createdAt", "updatedAt"]
            }
        });
        if (req.user) {
            return next();
        } else {
            return next(new NotFoundError("User not found."))
        }

    } catch (e) {
        next(e)
    }

}