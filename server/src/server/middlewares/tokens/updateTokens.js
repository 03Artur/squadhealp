import jwt from 'jsonwebtoken';
import {REGEXP} from "../../utils/regexp";
import {TOKEN_PRIVATE_KEY} from "../../utils/constants";
import {ForbiddenError} from '../../errors';
import checkToken from './checkToken';
import {RefreshToken} from '../../models';

export default (req, res, next) => {

    try {
        const token = req.body.refreshToken.replace(REGEXP.AUTHORIZATION_BEARER, '');
        jwt.verify(token, TOKEN_PRIVATE_KEY, (err, decoded) => {
            if (err) {
                throw new ForbiddenError();
            } else {

                const tokenPair = {
                    access: '',
                    refresh:'',
                };
                res.send(tokenPair);
            }
        });



    } catch (e) {
        next(e);
    }

}
