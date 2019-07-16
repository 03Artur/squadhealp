import {User} from './../../models';
import {NotFoundError} from './../../errors';

export default async function (req, res, next) {
    try {
        const user = await User.findOne({
            where: {
                email: req.user.email
            },
        });
        if (!user) {
            next(new NotFoundError());
        }
        else{
            req.user = user;
        }
    } catch (e) {
        next(e)
    }

}