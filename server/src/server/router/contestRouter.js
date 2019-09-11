import express from 'express';
import contestMW from '../middlewares/contest'
import * as contestController from '../controllers/contestController'
import path from 'path'
import multer from 'multer';
import moment from 'moment';
import {MULTER_TIME_FORMAT} from '../constants';
import {namingFile} from "../middlewares/multer";
import {getContestTaskOrder, pickContestFilter, pickOrder, pickTaskFilter} from "../middlewares/contest/contestsFilter";
import {addContestExtraContent} from "../middlewares/contest/includeContestExtraContent";


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../../../public/images/taskFiles/'))
    },
    filename: namingFile
});

const upload = multer({storage: storage});
const router = express.Router();

router.post('/contest',
    /*  contestMW.checkUserCrudContestPermissions,
      contestMW.validateContestOnCreate,*/
    contestController.upsertContest
);


router.put('/contest/:id',
    contestMW.checkUserCrudContestPermissions,
    contestMW.validateContestOnUpdate,
    contestController.upsertContest);

router.post('/contest/:id/task',
    contestMW.checkUserCrudContestPermissions,
    upload.array('files', 8),
    (req, res, next) => {
        try {

            req.body = JSON.parse(req.body.task);

            req.body.files = req.files.map(item => item.filename);

            next();

        } catch (e) {
            next(e);
        }
    },
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

router.get('/contests',
    // contestMW.checkUserCrudContestPermissions,
    pickContestFilter,
    pickTaskFilter,
    pickOrder,
    getContestTaskOrder,
    addContestExtraContent,
    contestController.getContests);

export default router;


