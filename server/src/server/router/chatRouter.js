import express from 'express';
import {createChat, createMessage, getAllUserChats} from "../controllers/chatController";
import {validateChat, validateMessage} from "../middlewares/chat/validation";
const router = express.Router();


router.post('/chat',validateChat, createChat);
router.get('/chat', getAllUserChats);
router.post('/message/:chatId', validateMessage, createMessage);

export default router;