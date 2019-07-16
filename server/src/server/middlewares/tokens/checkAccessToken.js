import jwt from 'jsonwebtoken';
import {REGEXP} from "../../utils/regexp";
import {TOKEN_PRIVATE_KEY} from "../../utils/constants";
import {AuthenticationTimeoutError, NotFoundError} from '../../errors';
import {User} from '../../models'

export default (req, res, next) => {
    try {
        if(!req.headers.Authorization)
        {
            throw new AuthenticationTimeoutError();
        }
        const token = req.headers.Authorization.replace(REGEXP.AUTHORIZATION_BEARER, '');
        jwt.verify(token, TOKEN_PRIVATE_KEY, async (err, decoded) => {
            if (err) {
                throw new AuthenticationTimeoutError();
            } else {
                req.user = await User.findByPk(decoded.id, {
                    attributes: {exclude: ['password']}
                });
                if (!req.user) {
                    throw new NotFoundError();
                }
            }
        });
        next();
    } catch (e) {
        next(e);
    }
};








