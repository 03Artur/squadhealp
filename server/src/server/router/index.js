import 'babel-polyfill';
import express from 'express';

const router = express.Router();

router.get('/test', (req, res, next) => {
	res.send("Hello world");
});

router.get('/user',)



module.exports = router;

