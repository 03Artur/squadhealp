import express from 'express';
import {createUser, deleteUserById, getUserById, updateUserById, findAndCountAllUsers} from '../controllers/userController'
import hashPassword from '../middlewares/password/hashPassword'
import {validateDataOnCreateUser, validateDataOnUpdateUser} from '../middlewares/user/validateUser'
import checkUserCrudPermission, {isItAdmin} from '../middlewares/permission/checkCrudUserPermission';

const router = express.Router();

router.get('/users', isItAdmin, findAndCountAllUsers);

router.post('/user', checkUserCrudPermission, validateDataOnCreateUser, hashPassword, createUser);
router.get('/user/:id', checkUserCrudPermission, getUserById);
router.put('/user/:id', checkUserCrudPermission, validateDataOnUpdateUser, hashPassword, updateUserById);
router.delete('/user/:id', checkUserCrudPermission, deleteUserById);

module.exports = router;