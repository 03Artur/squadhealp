import jwt from 'jsonwebtoken';
import {TOKEN_PRIVATE_KEY} from "../../utils/constants";
import {UnauthorizedError} from '../../errors';
import {User, RefreshToken} from '../../models';
import createToken from './createToken';
import {ACCESS_TOKEN_EXPIRES_IN, REFRESH_TOKEN_EXPIRES_IN} from './../../utils/constants';

export default (req, res, next) => {
    try {

        jwt.verify(req.body.refreshToken, TOKEN_PRIVATE_KEY, (err, decoded) => {
            if (err) {
                next(new UnauthorizedError());
            } else {
                req.id = decoded.id;
                next();

            }
        })

    } catch (e) {
        next(new UnauthorizedError());
    }
};








