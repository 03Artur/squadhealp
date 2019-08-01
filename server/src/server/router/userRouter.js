import express from 'express';
import {createUser, deleteUserById, getUserById, updateUserById, findAndCountAllUsers} from '../controllers/userController'
import hashPassword from '../middlewares/password/hashPassword'
import {validationCreateUser, validationUpdateUser} from '../middlewares/user/userValidation'
import checkUserCrudPermission, {isItAdmin} from '../middlewares/permission/checkUserCrudPermission';

const router = express.Router();

router.get('/users', isItAdmin, findAndCountAllUsers);

router.post('/user', checkUserCrudPermission, validationCreateUser, hashPassword, createUser);
router.get('/user/:id', checkUserCrudPermission, getUserById);
router.put('/user/:id', checkUserCrudPermission, validationUpdateUser, hashPassword, updateUserById);
router.delete('/user/:id', checkUserCrudPermission, deleteUserById);

module.exports = router;