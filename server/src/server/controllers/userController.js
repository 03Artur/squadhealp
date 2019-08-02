import {Users, RefreshTokens} from '../models';
import createToken from '../utils/func/createToken'
import {ACCESS_TOKEN_EXPIRES_IN, REFRESH_TOKEN_EXPIRES_IN} from "../constants";
import {NotFoundError, BadRequestError} from '../errors';

export const createUser = async (req, res, next) => {
    try {
        const user = await Users.build(req.body);

        const newUser = await user.save();
        newUsers.password = undefined;
        res.send(newUser);
    } catch (e) {
        next(e);
    }
};

export const findAndCountAllUsers = async (req, res, next) => {
    try {


        const query = req.query;
        const result = await Users.findAndCountAll({
            order: [['id', 'ASC']],
            attributes: {exclude: ['password']},
            limit: query.limit,
            offset: query.offset,

        });
        if (!result) {
            return next(new NotFoundError("Users not found"));

        }
        res.send(result);
    } catch (e) {
        next(new BadRequestError())
    }
};

export const getUserById = async (req, res, next) => {
    try {
        parseInt(req.params.id);
        const user = await Users.findByPk(parseInt(req.params.id), {
            attributes: {exclude: ['password']}
        });

        if (!user) {
            return next(new NotFoundError);
        }
        res.send(user);
    } catch (e) {
        next(e);
    }
};

export const updateUserById = async (req, res, next) => {
    try {
        const user = await Users.findByPk(parseInt(req.params.id), {
            attributes: {exclude: ['password']}
        });

        if (!user) {
            return next(new NotFoundError);

        }
        const result = await user.update(req.body);
        res.send(result);
    } catch (e) {
        next(e);
    }
};

export const deleteUserById = async (req, res, next) => {
    try {
        const result = await Users.destroy({
            where: {
                id: parseInt(req.params.id)
            }
        });
        res.send([result]);

    } catch (e) {
        next(e);
    }
};



