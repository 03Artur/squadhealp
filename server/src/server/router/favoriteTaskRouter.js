import express from 'express';
import * as favoriteTaskController from '../controllers/favoriteTaskController'
import checkPermission from '../middlewares/favoriteTask/checkPermission'

const router = express.Router();



router.post('/favorite/task/:taskId',checkPermission, favoriteTaskController.addFavoriteTask);
router.delete('/favorite/task/:taskId', favoriteTaskController.removeFavoriteTask);


export default router;