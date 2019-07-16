import {User, RefreshToken} from '../models';
import createToken from '../middlewares/tokens/createToken'
import {ACCESS_TOKEN_EXPIRES_IN, REFRESH_TOKEN_EXPIRES_IN,} from "../utils/constants";
import {NotFoundError, BadRequestError} from '../errors'


export const updateRefreshTokenById = (req, res, next) => {

    try {

        const newAccessToken = createToken({

        }, ACCESS_TOKEN_EXPIRES_IN);
        const newRefreshToken = createToken({
            tokenId
        }, REFRESH_TOKEN_EXPIRES_IN);

    } catch (e) {
        next(e);
    }
};

export const createRefreshToken = (req,res,next) => {

    try{

    }catch (e) {
        next(e);
    }


};