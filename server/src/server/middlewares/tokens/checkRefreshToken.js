import jwt from 'jsonwebtoken';
import {TOKEN_PRIVATE_KEY} from "../../utils/constants";
import {UnauthorizedError} from '../../errors';
import util from 'util';

const verifyToken = util.promisify(jwt.verify);

export default async (req, res, next) => {
    try {
        console.log("checkRefreshToken");
        req.refreshTokenPayload = await verifyToken(req.body.refreshToken, TOKEN_PRIVATE_KEY);
        next();
    } catch (e) {
        next(new UnauthorizedError(e.message));
    }
};








