import {User, RefreshToken} from '../models';
import createToken from '../middlewares/tokens/createToken'
import {ACCESS_TOKEN_EXPIRES_IN, REFRESH_TOKEN_EXPIRES_IN} from "../utils/constants";
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

export const getAllUsers = async (req, res, next) => {
    try {
        const users = await User.findAll({
            attributes: {exclude: ['password']},
        });
        if (!users) {
            next(new NotFoundError("Users not found"));
            return
        }
        res.send(users);


    } catch (e) {

    }
}

export const getUserById = async (req, res, next) => {
    try {
        parseInt(req.params.id);
        const user = await User.findByPk(parseInt(req.params.id), {
            attributes: {exclude: ['password']}
        });

        if (!user) {
            next(new NotFoundError);
        }
        res.send(user);
    } catch (e) {
        next(e);
    }
};

export const updateUserById = async (req, res, next) => {
    try {
        const result = await User.update(req.body, {
            where: {
                id: req.params.id,
            },

        });
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



