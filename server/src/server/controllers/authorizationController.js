import {User, RefreshToken} from '../models';
import {ACCESS_TOKEN_EXPIRES_IN, REFRESH_TOKEN_EXPIRES_IN, TOKEN_PRIVATE_KEY} from "../utils/constants";
import jwt from 'jsonwebtoken';
import {BadRequestError, UnauthorizedError} from '../errors'
import sequelize from 'sequelize';

export const loginUser = async (req, res, next) => {
    try {
        console.log("loginUser");

        const user = req.user;

        const refreshToken = await RefreshToken.create({
            tokenString: "",
            userId: user.id,
        });
        const updatedRefreshToken = await refreshToken.update({
            tokenString: jwt.sign({
                tokenId: refreshToken.id,

            }, TOKEN_PRIVATE_KEY, {expiresIn: REFRESH_TOKEN_EXPIRES_IN})
        });


        res.send({
            user,
            tokenPair: {
                accessToken: jwt.sign({
                    id: user.id,
                    role: user.role,
                    email: user.email,
                }, TOKEN_PRIVATE_KEY, {expiresIn: ACCESS_TOKEN_EXPIRES_IN}),
                refreshToken: updatedRefreshToken.tokenString,
            }
        })

    } catch (e) {
        next(e);
    }
};


export const signUpUser = async (req, res, next) => {
    try {

        const user = await User.create(req.body);
        if (!user) {
            next(new BadRequestError())
        }

        const refreshToken = await RefreshToken.create({
            tokenString: "",
            userId: user.id,
        });
        const updatedRefreshToken = await refreshToken.update({
            tokenString: jwt.sign({
                tokenId: refreshToken.id,

            }, TOKEN_PRIVATE_KEY, {expiresIn: REFRESH_TOKEN_EXPIRES_IN})
        });

        res.send({
            tokenPair: {
                accessToken: jwt.sign({
                    id: user.id,
                    role: user.role,
                    email: user.email,
                }, TOKEN_PRIVATE_KEY, {expiresIn: ACCESS_TOKEN_EXPIRES_IN}),
                refreshToken: updatedRefreshToken.tokenString,
            },
            user: user,
        })
    } catch (e) {
        next(e);
    }

};

export const updateRefreshToken = async (req, res, next) => {

    try {

        const refreshToken = await RefreshToken.findByPk(req.refreshTokenPayload.tokenId/*,{transaction}*/);
        if (!refreshToken) {
            next(new UnauthorizedError());
            return;
        }

        await refreshToken.update({
            tokenString: createRefreshToken(res.tokenId)
        });

        const user = await User.findByPk(refreshToken.userId);

        res.send({
            tokenPair: {
                accessToken: createAccessToken(user),
                refreshToken: refreshToken.tokenString,
            },
        })
    } catch (e) {
        next(e);
    }
};

function createAccessToken({id, role, email,isBanned, rest}) {
    return jwt.sign({
        id,
        role,
        email,
        isBanned,
    }, TOKEN_PRIVATE_KEY, {expiresIn: ACCESS_TOKEN_EXPIRES_IN});
}

function createRefreshToken(_refreshTokenId) {
    return jwt.sign({tokenId: _refreshTokenId}, TOKEN_PRIVATE_KEY, {expiresIn: REFRESH_TOKEN_EXPIRES_IN});

}