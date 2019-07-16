import express from 'express';
import {createUser, deleteUserById, getUserById, updateUserById} from '../controllers/userController'

const router = express.Router();

router.post('/user', createUser);
router.get('/user/:id', getUserById);
router.put('/user/:id', updateUserById);
router.delete('/user/:id', deleteUserById);
router.get('/login',);

module.exports = router;