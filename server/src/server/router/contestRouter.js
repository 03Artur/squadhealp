import express from 'express';
import contestMW from '../middlewares/contest'
import * as contestController from '../controllers/contestController'

const router = express.Router();


router.post('/business',contestMW.validateDataOnCreateContest, contestController.createContest);
router.put('/business',contestMW.validateDataOnUpdateContest, contestController.updateContest);
router.post('/contest', contestController.createContestTask);
router.get('/contest:id',);
router.get('/contests',);
router.put('/contest:id', contestController.updateContestTaskById);
router.delete('/contest:id',);

module.exports = router;


