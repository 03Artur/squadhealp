import bcrypt from 'bcrypt';
import {BadRequestError} from './../../errors'

export default async (req, res, next) => {
    console.log('Compare passwords');
    try {
        await bcrypt.compare(req.body.password, req.user.password);
        next();
    } catch (e) {
        next(new BadRequestError(e.message));
    }

}