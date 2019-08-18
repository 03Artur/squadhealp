import express from 'express';
import contestMW from '../middlewares/contest'
import * as contestController from '../controllers/contestController'
import checkAccessToken from "../middlewares/token/checkAccessToken";
import path from 'path'
import multer from 'multer';
import moment from 'moment';
import {MULTER_TIME_FORMAT} from '../constants';


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../../../public/taskFiles/'))
    },
    filename: function (req, file, cb) {
        const {originalname} = file;
        cb(null, `${moment().format(MULTER_TIME_FORMAT)}_${originalname}`);

    }
});

const upload = multer({storage: storage});
const router = express.Router();

router.post('/contest',
    /*  contestMW.checkUserCrudContestPermissions,
      contestMW.validateContestOnCreate,*/
    contestController.upsertContest
);

router.post('/task',
    contestMW.checkUserCrudTaskPermissions,
    contestMW.validateTaskOnCreate,
    contestMW.addCostToTask,
    contestMW.addPriorityToTask,
    contestController.createTask
);

router.put('/contest/:id',
    contestMW.checkUserCrudContestPermissions,
    contestMW.validateContestOnUpdate,
    contestController.updateContest);

router.post('/contest/:id/task',
    upload.array('files', 8),

    (req, res, next) => {
        try {

            req.body = JSON.parse(req.body.task);
            req.body.files = req.files.map(item=>item.filename);
            next();

        } catch (e) {
            next(e);
        }
    },

    contestMW.checkUserCrudContestPermissions,
    contestMW.validateTaskOnCreate,
    contestMW.addCostToTask,
    contestMW.addPriorityToTask,
    contestController.createTask);


router.put('/contest/task',
    contestMW.checkUserCrudTaskPermissions,
    contestMW.validateTaskOnUpdate,
    contestMW.addCostToTask,
    contestMW.addPriorityToTask,
    contestController.updateTaskById,
);

router.get('/contest/:id',
/*
    contestMW.checkUserCrudContestPermissions,
*/
    contestController.getContestById
);


export default router;


