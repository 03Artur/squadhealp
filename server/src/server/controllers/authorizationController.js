// PACKAGES
import jwt from 'jsonwebtoken';

//DATA BASE
import {User, RefreshToken} from '../models';
import db from '../models';

//UTILS
import {ACCESS_TOKEN_EXPIRES_IN, REFRESH_TOKEN_EXPIRES_IN, TOKEN_PRIVATE_KEY} from "../utils/constants";
import {BadRequestError, UnauthorizedError} from '../errors'

//Sequelize instance
const sequelize = db.sequelize;

export const loginUser = async (req, res, next) => {
    try {
        const user = req.user;
        let transaction = await sequelize.transaction();
        let refreshToken = await RefreshToken.create({
            tokenString: signToken(user, true),
            userId: user.id,
        }, {
            transaction
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
            tokenString: signToken(user, true),
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

export const updateRefreshToken = async (req, res, next) => {
    try {
        let transaction = await sequelize.transaction();
        let refreshToken = await RefreshToken.findOne({
            where: {
                tokenString: req.body.refreshToken,
            },
            transaction,
        });
        if (!refreshToken) {
            next(new UnauthorizedError());
            return;
        }
        const user = await User.findByPk(refreshToken.userId, {
            transaction,
            attributes: {
                exclude: ['password', 'createdAt', 'updatedAt'],
            },
        });
        refreshToken = await refreshToken.update({
            tokenString: signToken(user, true),
        }, {
            transaction,
        });
        await transaction.commit();
        res.send({
            user,
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
    return isRefreshToken ?
        jwt.sign({id, role, email, isBanned,}, TOKEN_PRIVATE_KEY, {expiresIn: ACCESS_TOKEN_EXPIRES_IN})
        :
        jwt.sign({userEmail: email}, TOKEN_PRIVATE_KEY, {expiresIn: REFRESH_TOKEN_EXPIRES_IN});
}

