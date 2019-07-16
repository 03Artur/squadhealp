import {User} from './../../models';
import {NotFoundError} from './../../errors';

export default async function (req, res, next) {
    try {
        console.log('find user by email');
        req.user = await User.findOne({
            where: {
                email: req.body.email
            },
            attributes: {
                exclude: ["createdAt", "updatedAt"]
            }
        });
        if (req.user) {
            next();
        } else {
            next(new NotFoundError("User not found."))
        }

    } catch (e) {
        next(e)
    }

}