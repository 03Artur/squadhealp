import express from 'express';

import findUserByEmail from '../middlewares/user/findUserByEmail';
import comparePassword from '../middlewares/passwords/comparePassword';
import hashPassword from './../middlewares/passwords/hashPassword';
import {validationCreateUser} from '../middlewares/dataValidation/userValidation'
import checkRefreshToken from './../middlewares/tokens/checkRefreshToken'
import {loginUser, signUpUser, updateRefreshToken, getUserByAccessTokenPayload} from './../controllers/authorizationController';
import checkRefreshTokensLimit from '../middlewares/tokens/checkRefreshTokensLimit'
import setUserActive from './../middlewares/user/setUserActive';
import checkUserBan from './../middlewares/permission/checkUserBan';
import checkAccessToken from "../middlewares/tokens/checkAccessToken";


const router = express.Router();

router.post('/login',
    findUserByEmail,
    checkUserBan,
    comparePassword,
    checkRefreshTokensLimit,
    loginUser);

router.post('/signup',
    validationCreateUser,
    hashPassword,
    signUpUser);

router.post('/refresh',
    checkRefreshToken,
    updateRefreshToken);

router.get('/authorize',
    checkAccessToken,
    getUserByAccessTokenPayload);

module.exports = router;


