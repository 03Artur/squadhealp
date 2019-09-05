import express from 'express';
import contestRouter from './contestRouter';
import userRouter from './userRouter';
import paymentRouter from './paymentRouter';
import chatRouter from './chatRouter';
import favoriteTaskRouter from './favoriteTaskRouter'

import checkAccessToken from "../middlewares/token/checkAccessToken";

const router = express.Router();

router.use(checkAccessToken);
router.use(paymentRouter);
router.use(chatRouter);
router.use(contestRouter);
router.use(userRouter);
router.use(favoriteTaskRouter);

module.exports = router;

