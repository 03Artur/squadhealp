import jwt from 'jsonwebtoken';
import {REGEXP} from "../../utils/regexp";
import {TOKEN_PRIVATE_KEY} from "../../utils/constants";
import {UnauthorizedError} from '../../errors'

export default (req, res, next) => {

    try {
        const token = req.headers.Authorization.replace(REGEXP.AUTHORIZATION_BEARER, '');

        jwt.verify(token, TOKEN_PRIVATE_KEY,
            (err, decoded) => {
                if (err) {
                    throw new UnauthorizedError();
                } else {
                    req.tokenData = decoded;
                }
            });
        next("route");

    } catch (e) {
        next(e);
    }

}






