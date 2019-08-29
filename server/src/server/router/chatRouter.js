import express from 'express';
import {createChat, createMessage, getAllUserChats} from "../controllers/chatController";
const router = express.Router();


router.post('/chat', createChat);
router.get('/chat', getAllUserChats);
router.post('/message/:chatId', createMessage);

export default router;