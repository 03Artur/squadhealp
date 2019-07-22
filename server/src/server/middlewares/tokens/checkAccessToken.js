import jwt from 'jsonwebtoken';
import {REGEXP} from "../../utils/regexp";
import {TOKEN_PRIVATE_KEY} from "../../utils/constants";
import {AuthenticationTimeoutError,  UnauthorizedError} from '../../errors';

import util from 'util'

const verifyToken = util.promisify(jwt.verify);

export default async (req, res, next) => {
    try {

        console.log('checkAccessToken');
        if (!req.headers.authorization) {
            next(new UnauthorizedError());
            return;
        }

        const token = req.headers.authorization.replace(REGEXP.AUTHORIZATION_BEARER, '');

        req.accessTokenPayload = await verifyToken(token, TOKEN_PRIVATE_KEY);
       next();

    } catch (e) {
        next(new AuthenticationTimeoutError());
    }
};








