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
        res.send({login: "login"})

        if (req.user) {
            res.send(req.user);
        } else {
            return next(new NotFoundError("User not found."))
        }

    } catch (e) {
        next(e)
    }

}