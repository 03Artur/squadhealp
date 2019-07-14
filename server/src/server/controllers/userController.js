import {User} from '../models';
import createToken from '../middlewares/tokens/createToken'
import {ACCESSTOKEN_EXPIRESIN, REFRESH_EXPIRESIN} from "../utils/constants";
import {NotFoundError, BadRequestError} from '../errors'

export const createUser = async (req, res, next) => {
    try {
        const user = await User.build(req.body);

        const newUser = await user.save();

        res.send(newUser.get());
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
        const result = await User.update(req.body, {
            where: {
                id: req.params.id,
            }
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
        res.send([result])
        ;

    } catch (e) {
        next(e);
    }
};

export const loginUser = async (req, res, next) => {

};

export const logoutUser = async (req, res, next) => {

};

export const signUpUser = async (req, res, next) => {
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
        const accessToken = createToken(payload, ACCESSTOKEN_EXPIRESIN);
        const refreshToken = createToken(payload, REFRESH_EXPIRESIN);
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

};


