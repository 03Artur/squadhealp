import jwt from 'jsonwebtoken';
import {TOKEN_PRIVATE_KEY} from "../../utils/constants";
import {UnauthorizedError} from '../../errors';
import util from 'util';


const verifyToken = util.promisify(jwt.verify);

export default (req, res, next) => {
    try {
        console.log("Refresh.token: ",req.body);
       /* jwt.verify(req.body.refreshToken, TOKEN_PRIVATE_KEY, (err, decoded) => {
            if (err) {
                next(new UnauthorizedError());
            } else {
                req.refreshTokenPayload = decoded;
                next();
            }
        })*/

       verifyToken(req.body.refreshToken, TOKEN_PRIVATE_KEY)
           .then(decoded => {
               console.log(decoded);
               req.refreshTokenPayload = decoded;
               next();
           }).catch(err => {
           console.log(err);

           next(new UnauthorizedError(err.message));
       })

    } catch (e) {
        next(e);
    }
};








