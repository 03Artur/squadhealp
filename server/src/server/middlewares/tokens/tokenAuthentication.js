import {UnauthorizedError} from '../../errors';
import jwt from 'jsonwebtoken';
import {REGEXP} from '../../utils/regexp';
import {TOKEN_PRIVATE_KEY} from '../../utils/constants';

async function tokenAuthentication(req, res, next) {
    try {
        const token = req.headers.Authorization.replace(REGEXP.AUTHORIZATION_BEARER, '');
        const payload = jwt.verify(token, TOKEN_PRIVATE_KEY);

        next();
    } catch (e) {
        next(new UnauthorizedError());
    }
}

export default tokenAuthentication;