import express from 'express';
import contestMW from '../middlewares/contest'
import * as contestController from '../controllers/contestController'
import bankMW from '../middlewares/bank';
import findTaskById from "../middlewares/contest/task/findTaskById";

const router = express.Router();


router.put('/task/payment:id',
    bankMW.bankCardValidation,
    bankMW.findBankCardByNumber,
    findTaskById,
    bankMW.checkSolvency,

    );





export default router;


