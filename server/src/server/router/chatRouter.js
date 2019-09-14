import express from 'express';
import * as chatController from "../controllers/chatController";
import {validateChat, validateMessage} from "../middlewares/chat/validation";
import {findChatById, findMessageById} from "../middlewares/chat/findChatById";
import {checkPermission, checkMessagePermission} from "../middlewares/chat/checkPermission";
import createTaskChat from "../middlewares/contest/createTaskChat";
import findTaskById from "../middlewares/contest/task/findTaskById";

const router = express.Router();

/*
* CHAT
* */
router.get('/chats', chatController.getAllUserChats);
router.post('/chat', checkPermission, validateChat, chatController.createChat);
router.get('/chats/:chatId', findChatById, checkPermission, chatController.sendChat);
router.get('/chat', chatController.getChatByQuery);
router.post('/chats/:chatId/join', chatController.joinToChat);
router.post('/chat/task/:id', findTaskById, createTaskChat);

/*
* PARTICIPANT
* */
router.get('/participant/:id', chatController.getParticipantById);
router.get('/participants', chatController.getParticipants);

/*
* MESSAGE
* */
router.post('/chat/:chatId/message', validateMessage, findChatById, checkMessagePermission, chatController.postMessage);
router.get('/chat/:chatId/messages', findChatById, checkPermission, chatController.getChatMessages);
router.get('/message/:messageId', findMessageById, findChatById, checkMessagePermission, chatController.sendMessage);
router.put('/message/:id', validateMessage, findMessageById, checkMessagePermission, chatController.updateMessage);


export default router;