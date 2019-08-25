// PACKAGES
import jwt from 'jsonwebtoken';

//DATA BASE
import {Users, RefreshTokens} from '../models';
import db from '../models';

//UTILS
import {ACCESS_TOKEN_EXPIRES_IN, REFRESH_TOKEN_EXPIRES_IN, TOKEN_PRIVATE_KEY} from "../constants";
import {BadRequestError, UnauthorizedError, NotFoundError, ForbiddenError} from '../errors'

//Sequelize instance
const sequelize = db.sequelize;

export const loginUser = async (req, res, next) => {
    try {
        const user = req.user;

        user.password = undefined;

        let transaction = await sequelize.transaction();
        let refreshToken = await RefreshTokens.create({
            userId: user.id,
            tokenString: "",
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
        const user = await Users.create(req.body, {
            transaction,
        });
        if (!user) {
            return next(new BadRequestError());
        }
        let refreshToken = await RefreshTokens.create({
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

        let user = await Users.findByPk(req.accessTokenPayload.id, {
            attributes: {
                exclude: ['password', 'createdAt', 'updatedAt'],
            },
        });
        if (!user) {
            return next(new NotFoundError());
        }
        res.send(user);
    } catch (e) {
        next(new NotFoundError())
    }
};

export const updateRefreshToken = async (req, res, next) => {
    try {
        let transaction = await sequelize.transaction();
        let refreshToken = await RefreshTokens.findByPk(req.refreshTokenPayload.id);

        if (!refreshToken) {
            return next(new BadRequestError());

        }
        const user = await Users.findByPk(refreshToken.userId, {
            transaction,
            attributes: {
                exclude: ['password', 'createdAt', 'updatedAt'],
            },
        });
        if (user.isBanned) {
            return next(new ForbiddenError());
        }
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

export const deleteRefreshToken = async (req, res, next) => {

    try {

        const result = await RefreshTokens.destroy({
            where: {
                tokenString: req.query.tokenString,
            }
        });

        res.send({
            numberOfDestroyedRows: result,
        });

    } catch (e) {
        next(e);
    }

};

function signToken({id, role, email, isBanned}, isRefreshToken = false) {
    return !isRefreshToken ?
        jwt.sign({id, role, email, isBanned,}, TOKEN_PRIVATE_KEY, {expiresIn: ACCESS_TOKEN_EXPIRES_IN})
        :
        jwt.sign({userEmail: email}, TOKEN_PRIVATE_KEY, {expiresIn: REFRESH_TOKEN_EXPIRES_IN});
}




