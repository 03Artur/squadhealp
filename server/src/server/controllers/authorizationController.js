// PACKAGES
import jwt from 'jsonwebtoken';

//DATA BASE
import {User, RefreshToken} from '../models';
import db from '../models';

//UTILS
import {ACCESS_TOKEN_EXPIRES_IN, REFRESH_TOKEN_EXPIRES_IN, TOKEN_PRIVATE_KEY} from "../utils/constants";
import {BadRequestError, UnauthorizedError, NotFoundError} from '../errors'

//Sequelize instance
const sequelize = db.sequelize;

export const loginUser = async (req, res, next) => {
    try {
        const user = req.user;
        let transaction = await sequelize.transaction();
        let refreshToken = await RefreshToken.create({
            userId: user.id,
            tokenString: "null",
        }, {
            transaction,
        });
        refreshToken = await refreshToken.update({
            tokenString: jwt.sign({id: refreshToken.id}, TOKEN_PRIVATE_KEY, {expiresIn: REFRESH_TOKEN_EXPIRES_IN})
        }, {
            transaction,
        });
        await transaction.commit();
        res.send({
            user,
            tokenPair: {
                accessToken: signToken(user),
                refreshToken: refreshToken.tokenString,
            }
        })
    } catch (e) {
        next(e);
    }
};

export const signUpUser = async (req, res, next) => {
    try {
        let transaction = await sequelize.transaction();
        const user = await User.create(req.body, {
            transaction,
        });
        if (!user) {
            next(new BadRequestError());
            return;
        }
        let refreshToken = await RefreshToken.create({
            userId: user.id,
            tokenString: "null",
        }, {
            transaction,
        });
        refreshToken = await refreshToken.update({
            tokenString: jwt.sign({id: refreshToken.id}, TOKEN_PRIVATE_KEY, {expiresIn: REFRESH_TOKEN_EXPIRES_IN})
        }, {
            transaction,
        });
        await transaction.commit();
        res.send({
            tokenPair: {
                accessToken: signToken(user),
                refreshToken: refreshToken.tokenString,
            },
            user: user,
        })
    } catch (e) {
        next(e);
    }

};
export const getUserByAccessTokenPayload = async (req, res, next) => {
    try {

        let user = await User.findByPk(req.accessTokenPayload.id, {
            attributes: {
                exclude: ['password', 'createdAt', 'updatedAt'],
            },
        });
        if (!user) {
            next(new NotFoundError())

        }
        console.log(user)
        res.send(user);
    } catch (e) {
        next(new NotFoundError())
    }
};

export const updateRefreshToken = async (req, res, next) => {
    try {
        let transaction = await sequelize.transaction();
        let refreshToken = await RefreshToken.findByPk(req.refreshTokenPayload.id);
        if (!refreshToken) {
            next(new BadRequestError());
            return;
        }
        const user = await User.findByPk(refreshToken.userId, {
            transaction,
            attributes: {
                exclude: ['password', 'createdAt', 'updatedAt'],
            },
        });
        refreshToken = await refreshToken.update({
            tokenString: jwt.sign({id: refreshToken.id}, TOKEN_PRIVATE_KEY, {expiresIn: REFRESH_TOKEN_EXPIRES_IN})
        }, {
            transaction,
        });
        await transaction.commit();
        res.send({
            tokenPair: {
                accessToken: signToken(user),
                refreshToken: refreshToken.tokenString,
            },
        })
    } catch (e) {
        next(e);
    }
};

function signToken({id, role, email, isBanned, rest}, isRefreshToken = false) {
    return !isRefreshToken ?
        jwt.sign({id, role, email, isBanned,}, TOKEN_PRIVATE_KEY, {expiresIn: ACCESS_TOKEN_EXPIRES_IN})
        :
        jwt.sign({userEmail: email}, TOKEN_PRIVATE_KEY, {expiresIn: REFRESH_TOKEN_EXPIRES_IN});
}

