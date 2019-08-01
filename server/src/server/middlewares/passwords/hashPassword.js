import bcrypt from 'bcrypt';
import {SALT_ROUND} from '../../constants'

export default async (req, res, next) => {

    try {
        if (req.body.password) {
            const salt = await bcrypt.genSalt(SALT_ROUND);
            req.body.password = await bcrypt.hash(req.body.password, salt);
        }

        return next();
    } catch (e) {
        next(e);
    }

}