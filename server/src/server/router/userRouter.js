import express from 'express';
import {
    createUser,
    deleteUserById,
    getUserById,
    updateUserById,
    findAndCountAllUsers
} from '../controllers/userController'
import hashPassword from '../middlewares/password/hashPassword'
import {validateDataOnCreateUser, validateDataOnUpdateUser} from '../middlewares/user/validateUser'
import checkUserCrudPermission, {isItAdmin} from '../middlewares/permission/checkCrudUserPermission';
import checkAccessToken from "../middlewares/token/checkAccessToken";
import {Users} from '../models'

import appError from '../errors'


const router = express.Router();

router.use(checkAccessToken);


const checkBanPermission = async (req, res, next) => {
    try {
        const {role, id} = req.accessTokenPayload;
        const actorActionRules = Users.actionRules.get(role);
        const banRule = actorActionRules.rules.get(ACTION.BAN);

        if (banRule) {
            const obj = await Users.findByPk(req.params.id);

            if(obj && banRule.checkPermission(obj.role, obj.id === id)) {
                next();
            }
            next(new appError.ForbiddenError());
        }

    } catch (e) {
        next(new appError.ForbiddenError())
    }
}

router.get('/users', isItAdmin, findAndCountAllUsers);
router.put('/ban/:id', checkBanPermission, banContller)
router.post('/user', checkUserCrudPermission, validateDataOnCreateUser, hashPassword, createUser);
router.get('/user/:id', checkUserCrudPermission, getUserById);
router.put('/user/:id', checkUserCrudPermission, validateDataOnUpdateUser, hashPassword, updateUserById);
router.delete('/user/:id', checkUserCrudPermission, deleteUserById);

module.exports = router;