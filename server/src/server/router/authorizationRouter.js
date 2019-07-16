import express from 'express';
import {createUser, deleteUserById, getUserById, updateUserById, loginUser} from '../controllers/userController'
import hashPassword from './../middlewares/passwords/hashPassword';
import comparePassword from '../middlewares/passwords/comparePassword';
import {createUserValidation, updateUserValidation} from '../middlewares/dataValidation/userValidation'
import findUserByEmail from '../middlewares/user/findUserByEmail';
import {updateRefreshToken} from './../controllers/refreshTokenController'
import checkRefreshToken from './../middlewares/tokens/checkRefreshToken'

const router = express.Router();

router.get('/login', findUserByEmail, comparePassword, loginUser,);
router.post('/signup', createUserValidation, hashPassword, ,);
router.get('/refresh',checkRefreshToken, updateRefreshToken);
module.exports = router;
