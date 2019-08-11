import jwt from 'jsonwebtoken';
import {REGEXP} from "../../utils/regexp";
import {TOKEN_PRIVATE_KEY} from "../../constants";
import {AuthenticationTimeoutError, UnauthorizedError} from '../../errors';

import util from 'util'

const verifyToken = util.promisify(jwt.verify);

export default async (req, res, next) => {
    try {

        if (!req.headers.authorization) {
            return next(new UnauthorizedError());

        }

        const token = req.headers.authorization.replace(REGEXP.AUTHORIZATION_BEARER, '');

        req.accessTokenPayload = await verifyToken(token, TOKEN_PRIVATE_KEY);

        return next();

    } catch (e) {
        next(new AuthenticationTimeoutError());
    }
};








