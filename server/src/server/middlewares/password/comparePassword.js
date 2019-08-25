import bcrypt from 'bcrypt';
import {BadRequestError} from './../../errors'

export default async (req, res, next) => {
    try {
        if (await bcrypt.compare(req.body.password, req.user.password)) {
            return next();
        } else {
            return next(new BadRequestError('The password does not match'))
        }
    } catch (e) {
        next(new BadRequestError('The password does not match'))
    }

}