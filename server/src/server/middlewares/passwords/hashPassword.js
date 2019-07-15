import bcrypt from 'bcrypt';
import {SALT_ROUND} from '../../utils/constants'

export default async (req, res, next) => {

    try{
        const salt = await bcrypt.genSalt(SALT_ROUND);
        req.body.password = await bcrypt.hash(req.body.password,salt);
        next();
    }
    catch (e) {
        next(e);
    }

}