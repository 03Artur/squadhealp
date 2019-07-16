import {User, RefreshToken} from '../models';
import {ACCESS_TOKEN_EXPIRES_IN, REFRESH_TOKEN_EXPIRES_IN, TOKEN_PRIVATE_KEY} from "../utils/constants";

import jwt from 'jsonwebtoken';

export const updateRefreshToken = (req, res, next) => {

    try {

        const oldRefreshToken = RefreshToken.findByPk(req.id);

        const newRefreshToken = oldRefreshToken.update({
            tokenString: jwt.sign({
                id: req.id,
            }, TOKEN_PRIVATE_KEY, {expiresIn: REFRESH_TOKEN_EXPIRES_IN})
        });

        const user = User.findByPk(newRefreshToken.userId);

        res.send({
            accessToken: jwt.sign({
                id: user.id,
                role: user.role,
                email: user.email,
            }, TOKEN_PRIVATE_KEY, {expiresIn: ACCESS_TOKEN_EXPIRES_IN}),
            refreshToken: newRefreshToken.tokenString,
        })

    } catch (e) {
        next(e);
    }
};

