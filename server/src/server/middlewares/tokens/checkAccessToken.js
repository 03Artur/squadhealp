import jwt from 'jsonwebtoken';
import {REGEXP} from "../../utils/regexp";
import {TOKEN_PRIVATE_KEY} from "../../utils/constants";
import {AuthenticationTimeoutError,  UnauthorizedError} from '../../errors';

export default (req, res, next) => {
    try {
        console.log('checkAccessToken')
        /*if (!req.headers.Authorization) {
            next(new UnauthorizedError());
            return;
        }*/
        const token = req.headers.authorization.replace(REGEXP.AUTHORIZATION_BEARER, '');

        jwt.verify(token, TOKEN_PRIVATE_KEY,  (err, decoded) => {
            if (err) {
                next(new AuthenticationTimeoutError());

            } else {
                req.accessTokenPayload = decoded;
                next();

            }
        });
    } catch (e) {
        next(e);
    }
};








