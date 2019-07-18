import jwt from 'jsonwebtoken';
import {TOKEN_PRIVATE_KEY} from "../../utils/constants";
import {UnauthorizedError} from '../../errors';
import {User, RefreshToken} from '../../models';
import createToken from './createToken';
import {ACCESS_TOKEN_EXPIRES_IN, REFRESH_TOKEN_EXPIRES_IN} from './../../utils/constants';

export default (req, res, next) => {
    try {
        console.log("Refresh.token: ",req.body);
        jwt.verify(req.body.refreshToken, TOKEN_PRIVATE_KEY, (err, decoded) => {
            if (err) {
                next(new UnauthorizedError());
            } else {
                console.log(decoded);
                req.tokenId = decoded.tokenId;

                next();
            }
        })

    } catch (e) {
        next(new UnauthorizedError());
    }
};








