import {User, RefreshToken} from '../models';
import {ACCESS_TOKEN_EXPIRES_IN, REFRESH_TOKEN_EXPIRES_IN, TOKEN_PRIVATE_KEY} from "../utils/constants";
import jwt from 'jsonwebtoken';
import {DEVICES_COUNT} from './../utils/constants'


export const loginUser = async (req, res, next) => {
    try {
        console.log("loginUser");
        const user = req.user;

        const refreshToken = await RefreshToken.create({
            tokenString: "",
            userId: user.id,
        });
        const updatedRefreshToken = await refreshToken.update({
            tokenString: jwt.sign({
                id: refreshToken.id,

            }, TOKEN_PRIVATE_KEY, {expiresIn: REFRESH_TOKEN_EXPIRES_IN})
        });


        res.send({
            user,
            tokenPair: {
                accessToken: jwt.sign({
                    id: user.id,
                    role: user.role,
                    email: user.email,
                }, TOKEN_PRIVATE_KEY, {expiresIn: ACCESS_TOKEN_EXPIRES_IN}),
                refreshToken: updatedRefreshToken.tokenString,
            }
        })

    } catch (e) {
        next(e);
    }
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

};

export const updateRefreshToken = (req, res, next) => {

    try {

        const oldRefreshToken = RefreshToken.findByPk(req.id);

        const newRefreshToken = oldRefreshToken.update({
            tokenString: jwt.sign({
                id: req.id,
            }, TOKEN_PRIVATE_KEY, {expiresIn: REFRESH_TOKEN_EXPIRES_IN})
        });

        const user = User.findByPk(newRefreshToken.userId);

        res.send({
            accessToken: jwt.sign({
                id: user.id,
                role: user.role,
                email: user.email,
            }, TOKEN_PRIVATE_KEY, {expiresIn: ACCESS_TOKEN_EXPIRES_IN}),
            refreshToken: newRefreshToken.tokenString,
        })

    } catch (e) {
        next(e);
    }
};