import express from 'express';
import contestMW from '../middlewares/contest'
import * as contestController from '../controllers/contestController'
import bankMW from '../middlewares/bank';
import findTaskById from "../middlewares/contest/task/findTaskById";
import findContestById from "../middlewares/contest/findContestById";
import {activateNextContestTask} from "../controllers/contestController";

const router = express.Router();


router.post('/payment/contest/:id',
    bankMW.bankCardValidation,
    bankMW.findBankCardByNumber,
    findContestById,
    bankMW.checkSolvency,
    bankMW.debitFromCard,
    bankMW.transferFundsToSite,
    activateNextContestTask,
    );





export default router;


