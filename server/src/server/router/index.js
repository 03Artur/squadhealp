import express from 'express';
import contestRouter from './contestRouter';
import userRouter from './userRouter';
import paymentRouter from './paymentRouter';

import checkAccessToken from "../middlewares/token/checkAccessToken";

const router = express.Router();

router.use(checkAccessToken);
router.use(paymentRouter);

router.use(contestRouter);
router.use(userRouter);

module.exports = router;

