import express from 'express';
import contestMW from '../middlewares/contest'
import * as contestController from '../controllers/contestController'

const router = express.Router();


router.post('/contest',
    contestMW.checkUserCrudContestPermissions,
    contestMW.validateContestOnCreate,
    contestController.createContest);


router.put('/contest',
    contestMW.checkUserCrudContestPermissions,
    contestMW.validateContestOnUpdate,
    contestController.updateContest);


router.post('/contest/task',
    contestMW.checkUserCrudTaskPermissions,
    contestMW.validateTaskOnCreate,
    contestMW.addCostToTask,
    contestMW.addPriorityToTask,
    contestController.createTask
);

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


