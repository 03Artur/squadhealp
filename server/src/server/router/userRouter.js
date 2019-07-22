import express from 'express';
import {createUser, deleteUserById, getUserById, updateUserById, loginUser} from '../controllers/userController'
import hashPassword from './../middlewares/passwords/hashPassword'
import {validationCreateUser, validationUpdateUser} from '../middlewares/dataValidation/userValidation'
import checkUserCrudPermission from '../middlewares/permission/checkUserCrudPermission';
const router = express.Router();



router.post('/user',checkUserCrudPermission, validationCreateUser, hashPassword, createUser);
router.get('/user/:id',checkUserCrudPermission, getUserById);
router.put('/user/:id',checkUserCrudPermission, validationUpdateUser, hashPassword, updateUserById);
router.delete('/user/:id',checkUserCrudPermission, deleteUserById);

module.exports = router;