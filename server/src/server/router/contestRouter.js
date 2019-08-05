import express from 'express';
import contestMW from '../middlewares/contest'
import * as contestController from '../controllers/contestController'
import checkAccessToken from "../middlewares/token/checkAccessToken";

const router = express.Router();


router.post('/contest',
    checkAccessToken,
    contestMW.checkUserCrudContestPermissions,
    contestMW.validateContestOnCreate,
    contestController.createContest);

router.post('/contest/task',
    contestMW.checkUserCrudTaskPermissions,
    contestMW.validateTaskOnCreate,
    contestMW.addCostToTask,
    contestMW.addPriorityToTask,
    contestController.createTask
);

router.put('/contest',
    contestMW.checkUserCrudContestPermissions,
    contestMW.validateContestOnUpdate,
    contestController.updateContest);




router.put('/contest/task',
    contestMW.checkUserCrudTaskPermissions,
    contestMW.validateTaskOnUpdate,
    contestMW.addCostToTask,
    contestMW.addPriorityToTask,
    contestController.updateTaskById,
);

router.get('/contesttype',
    )



export default router;


