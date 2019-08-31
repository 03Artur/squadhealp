import express from 'express';
import {
    createChat,
    createMessage,
    getAllUserChats,
    getMessageAuthorById,
    getMessageById
} from "../controllers/chatController";
import {validateChat, validateMessage} from "../middlewares/chat/validation";
import {findChatBuId} from "../middlewares/chat/findChatById";
const router = express.Router();





router.get('/author/:id',getMessageAuthorById);
router.post('/chat',validateChat, createChat);
router.get('/chat', getAllUserChats);
router.post('/chat/:chatId/message', validateMessage,findChatBuId, createMessage);
router.get('/chat/:chatId/message/:id',getMessageById);
export default router;