import {UnauthorizedError} from '../../errors';
import jwt from 'jsonwebtoken';
import {REGEXP} from '../../utils/regexp'

function tockenAuthentication(req, res, next) {
    try {
        const token = req.headers.Authorization.replace(REGEXP.AUTHORIZATION_BEARER, '');
        req.headers.Authorization = jwt.verify(token);

        next();
    } catch (e) {
        next(new UnauthorizedError());
    }
}