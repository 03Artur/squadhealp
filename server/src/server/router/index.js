import 'babel-polyfill';
import express from 'express';
// import userRouter from './userRouter'
const router = express.Router();

router.get('/test', (req, res, next) => {
	res.send("Hello world");
});




module.exports = router;

