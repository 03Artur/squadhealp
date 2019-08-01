import express from 'express';

import findUserByEmail from '../middlewares/user/findUserByEmail';
import comparePassword from '../middlewares/password/comparePassword';
import hashPassword from '../middlewares/password/hashPassword';
import {validateDataOnCreateUser} from '../middlewares/user/validateUser'
import checkRefreshToken from '../middlewares/token/checkRefreshToken'
import {loginUser, signUpUser, updateRefreshToken, getUserByAccessTokenPayload} from './../controllers/authorizationController';
import checkRefreshTokensLimit from '../middlewares/token/checkRefreshTokensLimit'
import setUserActive from './../middlewares/user/setUserActive';
import checkUserBan from './../middlewares/permission/checkUserBan';
import checkAccessToken from "../middlewares/token/checkAccessToken";


const router = express.Router();

router.post('/login',
    findUserByEmail,
    checkUserBan,
    comparePassword,
    checkRefreshTokensLimit,
    loginUser);

router.post('/signup',
    validateDataOnCreateUser,
    hashPassword,
    signUpUser);

router.post('/refresh',
    checkRefreshToken,
    updateRefreshToken);

router.get('/authorize',
    checkAccessToken,
    getUserByAccessTokenPayload);

module.exports = router;


