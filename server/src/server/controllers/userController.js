import {User} from '../models';
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

export const getUserById = async (req, res, next) => {
    try {
        const user = await User.findByPk(req.params.id, {
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

export const loginUser = async (req, res, next) => {
    try {

        /*
                const user =
        */

    } catch (e) {
        next(e);
    }
};


/*export const signUpUser = async (req, res, next) => {
    try {

        const newUser = await User.build(req.body);
        if (!newUser) {
            next(new BadRequestError())
        }
        const payload = {
            id: newUser.id,
            role: newUser.role,
            email: newUser.email
        };
        const accessToken = createToken(payload, ACCESS_TOKEN_EXPIRES_IN);
        const refreshToken = createToken(payload, REFRESH_TOKEN_EXPIRES_IN);
        newUser.save();
        res.send({
            tokenPair: {
                access: accessToken,
                refresh: refreshToken,
            },
            user: newUser,
        })
    } catch (e) {
        next(e);
    }

};*/


