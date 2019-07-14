import {User} from '../models';
import jwt from 'jwt';

const {NotFoundError, BadRequestError} = require('../utils/errors')

export const createUser = async (req, res, next) => {
    try {
        const user = await User.build(req.body);
        if (!user) {
            next(new BadRequestError())
        }
        user.save();
        res.headers.token =
        res.send(user);
    } catch (e) {
        next(e);
    }
};

export const getUserById = async (req, res, next) => {
    try {
        const user = await User.findByPk(req.params.id);

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
        const user = await User.update(req.body, {where: {id: req.params.id}});
        if (!user) {
            next(new NotFoundError());
        }
        res.send(user);
    } catch (e) {
        next(e);
    }
};

export const deleteUserById = async (req, res, next) => {
    try {
        const user = await User.destroy({
            where: {
                id: req.params.id,
            }
        });
        if (!user) {
            next(new NotFoundError());
        }
        res.send(user);
    } catch (e) {
        next(e);
    }
};


