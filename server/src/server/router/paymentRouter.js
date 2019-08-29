import express from 'express';
import bankMW from '../middlewares/bank';
import findContestById from "../middlewares/contest/findContestById";
import {paymentContestTask} from "../controllers/contestController";

const router = express.Router();


router.post('/payment/contest/:id',
    bankMW.bankCardValidation,
    bankMW.findBankCardByNumber,
    findContestById,
    bankMW.checkSolvency,
    bankMW.debitFromCard,
    bankMW.transferFundsToSite,
    paymentContestTask,
);


export default router;


