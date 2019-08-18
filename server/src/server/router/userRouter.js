import express from 'express';
import {
    createUser,
    deleteUserById,
    getUserById,
    updateUserById,
    findAndCountAllUsers, banUser
} from '../controllers/userController'
import hashPassword from '../middlewares/password/hashPassword'
import {validateDataOnCreateUser, validateDataOnUpdateUser} from '../middlewares/user/validateUser'
import checkUserCrudPermission, {
    checkBanPermission,
    isItAdmin
} from '../middlewares/permission/checkCrudUserPermission';
import checkAccessToken from "../middlewares/token/checkAccessToken";
import {Users} from '../models'

import appError from '../errors'


const router = express.Router();

router.get('/users', isItAdmin, findAndCountAllUsers);
router.put('/ban/:id', checkBanPermission,banUser);
router.post('/user', checkUserCrudPermission, validateDataOnCreateUser, hashPassword, createUser);
router.get('/user/:id', checkUserCrudPermission, getUserById);
router.put('/user/:id', checkUserCrudPermission, validateDataOnUpdateUser, hashPassword, updateUserById);
router.delete('/user/:id', checkUserCrudPermission, deleteUserById);

module.exports = router;