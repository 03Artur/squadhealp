import express from 'express';
import {
    createChat,
    postMessage,
    getAllUserChats, getParticipants,
    getParticipantById,
    getMessageById,
    sendMessage, updateMessage, sendChat, getChatMessages, getChatByQuery, joinToChat,
} from "../controllers/chatController";
import {validateChat, validateMessage} from "../middlewares/chat/validation";
import {findChatById, findMessageById} from "../middlewares/chat/findChatById";
import {checkPermission, checkMessagePermission} from "../middlewares/chat/checkPermission";
import createTaskChat from "../middlewares/contest/createTaskChat";
import findTaskById from "../middlewares/contest/task/findTaskById";

const router = express.Router();


/*
* CHAT
* */
router.get('/chats', getAllUserChats);
router.post('/chat', checkPermission, validateChat, createChat);
router.get('/chats/:chatId', findChatById, checkPermission, sendChat);
router.get('/chat',getChatByQuery);
router.post('/chats/:chatId/join',joinToChat);
router.post('/chat/task/:id',findTaskById, createTaskChat);


/*
* PARTICIPANT
* */
router.get('/participant/:id', getParticipantById);
router.get('/participants', getParticipants);

/*
* MESSAGE
* */
router.post('/chat/:chatId/message', validateMessage, findChatById, checkMessagePermission, postMessage);
router.get('/chat/:chatId/messages', findChatById, checkPermission,getChatMessages);
router.get('/message/:messageId', findMessageById, findChatById, checkMessagePermission, sendMessage);
router.put('/message/:id', validateMessage, findMessageById, checkMessagePermission, updateMessage);


export default router;