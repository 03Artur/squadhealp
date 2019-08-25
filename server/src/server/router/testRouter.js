import express from 'express';
import {createUser, deleteUserById, getUserById, updateUserById, findAndCountAllUsers} from '../controllers/userController'
import hashPassword from '../middlewares/password/hashPassword'
import {validateDataOnCreateUser, validateDataOnUpdateUser} from '../middlewares/user/validateUser'
import  testCheckCrudUserPermission from '../middlewares/permission/checkCrudUserPermission';

const router = express.Router();

router.get('/users', testCheckCrudUserPermission, findAndCountAllUsers);

router.post('/testuser', testCheckCrudUserPermission, validateDataOnCreateUser, hashPassword, createUser);
router.get('/testuser', testCheckCrudUserPermission, getUserById);
router.put('/testuser', testCheckCrudUserPermission, validateDataOnUpdateUser, hashPassword, updateUserById);
router.delete('/testuser', testCheckCrudUserPermission, deleteUserById);

module.exports = router;