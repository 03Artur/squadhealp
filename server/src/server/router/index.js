
import express from 'express';
import contestRouter from './contestRouter';
import userRouter from './userRouter';

import checkAccessToken from "../middlewares/token/checkAccessToken";

const router = express.Router();

router.use(contestRouter);
router.use(userRouter);

module.exports = router;

