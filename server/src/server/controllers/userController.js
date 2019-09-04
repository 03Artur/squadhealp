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

export const getUsersIn = async (re, res, next) => {

    try {


        res.send(await Users.findAll({
            where: {
                id: [1, 2, 3]
            }
        }))

    } catch (e) {
        next(e)
    }

}


export const findAndCountAllUsers = async (req, res, next) => {
    try {


        const query = req.query;
        const users = await Users.findAndCountAll({
            order: [['id', 'ASC']],
            attributes: {exclude: ['password']},
            limit: query.limit,
            offset: query.offset,

        });
        if (users) {
            return  res.send(users);
        }
        return next(new NotFoundError("Users not found"));

    } catch (e) {
        next(new BadRequestError())
    }
};


export const banUser = async (req, res, next) => {
    try {
        const user = await req.user.update({
            isBanned: true
        }, {
            returning: true,
        });

        res.send(user);

    } catch (e) {
        next(e)
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
        const result = await user.update(req.body, {
            returning: true,
        });
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



