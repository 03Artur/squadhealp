import bcrypt from 'bcrypt';
import {SALT_ROUND} from '../../utils/constants'

export default async (req, res, next) => {

    try{
        bcrypt.compare(req.body.password, )
    }
    catch (e) {
        next(e);
    }

}