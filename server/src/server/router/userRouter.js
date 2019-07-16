import express from 'express';
import {createUser, deleteUserById, getUserById, updateUserById, loginUser} from '../controllers/userController'
import hashPassword from './../middlewares/passwords/hashPassword'
import {createUserValidation, updateUserValidation} from '../middlewares/dataValidation/userValidation'
import checkAccessToken from '../middlewares/tokens/checkAccessToken'
const router = express.Router();


router.post('/user',checkAccessToken, createUserValidation, hashPassword, createUser);
router.get('/user/:id',checkAccessToken, getUserById);
router.put('/user/:id',checkAccessToken, updateUserValidation, hashPassword, updateUserById);
router.delete('/user/:id',checkAccessToken, deleteUserById);
router.get('/login', hashPassword, loginUser);

module.exports = router;