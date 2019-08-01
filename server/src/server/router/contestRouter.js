import express from 'express';
import contestMW from '../middlewares/contest'
import * as contestController from '../controllers/contestController'

const router = express.Router();


router.post('/business',contestMW.validateDataOnCreateBusinessInfo, contestController.createBusinessInfo);
router.put('/business',contestMW.validateDataOnUpdateBusinessInfo, contestController.updateBusinessInfo);
router.post('/contest', contestController.createContest);
router.get('/contest:id',);
router.get('/contests',);
router.put('/contest:id', contestController.updateContestById);
router.delete('/contest:id',);

module.exports = router;


