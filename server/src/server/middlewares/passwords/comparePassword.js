import bcrypt from 'bcrypt';
import {BadRequestError} from './../../errors'

export default async (req, res, next) => {
    console.log('Compare passwords');
    try {

        if (await bcrypt.compare(req.body.password, req.user.password)) {
            next();
        } else {
            next(new BadRequestError('The passwords do not match.'))
        }
    } catch (e) {
        next(e);
    }

}