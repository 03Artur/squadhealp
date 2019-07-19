import jwt from 'jsonwebtoken';
import {TOKEN_PRIVATE_KEY} from "../../utils/constants";
import {UnauthorizedError} from '../../errors';

export default (req, res, next) => {
    try {
        console.log("Refresh.token: ",req.body);
        jwt.verify(req.body.refreshToken, TOKEN_PRIVATE_KEY, (err, decoded) => {
            if (err) {
                next(new UnauthorizedError());
            } else {
                req.refreshTokenPayload = decoded;
                next();
            }
        })

    } catch (e) {
        next(e);
    }
};








