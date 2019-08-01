import {User, RefreshToken} from '../models';
import createToken from '../middlewares/tokens/createToken'
import {ACCESS_TOKEN_EXPIRES_IN, REFRESH_TOKEN_EXPIRES_IN} from "../constants";
import {NotFoundError, BadRequestError} from '../errors';

export const createUser = async (req, res, next) => {
    try {
        const user = await User.build(req.body);

        const newUser = await user.save();
        newUser.password = undefined;
        res.send(newUser);
    } catch (e) {
        next(e);
    }
};

export const findAndCountAllUsers = async (req, res, next) => {
    try {


        const query = req.query;
        const result = await User.findAndCountAll({
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
        const user = await User.findByPk(parseInt(req.params.id), {
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
        const user = await User.findByPk(parseInt(req.params.id), {
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
        const result = await User.destroy({
            where: {
                id: parseInt(req.params.id)
            }
        });
        res.send([result]);

    } catch (e) {
        next(e);
    }
};



