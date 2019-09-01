import express from 'express';
import {
    createChat,
    postMessage,
    getAllUserChats, getAuthors,
    getAuthorById,
    getMessageById,
    sendMessage, updateMessage, sendChat,
} from "../controllers/chatController";
import {validateChat, validateMessage} from "../middlewares/chat/validation";
import {findChatById, findMessageById} from "../middlewares/chat/findChatById";
import {checkPermission, checkMessagePermission} from "../middlewares/chat/checkPermission";

const router = express.Router();


router.get('/chats', getAllUserChats);
router.get('/author/:id', getAuthorById);
router.get('/authors', getAuthors);


router.post('/chat', checkPermission, validateChat, createChat);
router.get('/chat/:chatId', findChatById, checkPermission, sendChat);

router.post('/chat/:chatId/message', validateMessage, findChatById, checkMessagePermission, postMessage);
router.get('/chat/:chatId/message/:id', findChatById, findMessageById, checkMessagePermission, sendMessage);
router.put('/chat/message/:id', validateMessage, findMessageById, checkMessagePermission, updateMessage);

router.get('/chat/:chatId/messages', findChatById, checkPermission,);
export default router;