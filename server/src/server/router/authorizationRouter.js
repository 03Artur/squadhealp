import express from 'express';

import findUserByEmail from '../middlewares/user/findUserByEmail';
import comparePassword from '../middlewares/passwords/comparePassword';
import hashPassword from './../middlewares/passwords/hashPassword';
import {createUserValidation} from '../middlewares/dataValidation/userValidation'
import checkRefreshToken from './../middlewares/tokens/checkRefreshToken'
import {loginUser, signUpUser, updateRefreshToken} from './../controllers/authorizationController';
import checkRefreshTokensLimit from '../middlewares/tokens/checkRefreshTokensLimit'
import setUserActive from './../middlewares/user/setUserActive';
import checkUserBan from './../middlewares/permission/checkUserBan';


const router = express.Router();

router.post('/login', findUserByEmail,
    checkUserBan,
    comparePassword,
    checkRefreshTokensLimit,
    setUserActive,
    loginUser);
router.post('/signup', createUserValidation, hashPassword, signUpUser);
router.post('/refresh', checkRefreshToken, updateRefreshToken);

module.exports = router;


