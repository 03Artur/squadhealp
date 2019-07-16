import express from 'express';
import {createUser, deleteUserById, getUserById, updateUserById, loginUser} from '../controllers/userController'
import hashPassword from './../middlewares/passwords/hashPassword'
import {createUserValidation, updateUserValidation} from '../middlewares/dataValidation/userValidation'
import checkAccessToken from '../middlewares/tokens/checkAccessToken'
const router = express.Router();


router.post('/user', createUserValidation, hashPassword, createUser);
router.get('/user/:id', getUserById);
router.put('/user/:id', updateUserValidation, hashPassword, updateUserById);
router.delete('/user/:id', deleteUserById);

module.exports = router;