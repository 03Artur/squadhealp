import express from 'express';



const router = express.Router();



router.post('/task/:taskId/favorite');


export default router;