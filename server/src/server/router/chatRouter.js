import express from 'express';
import {
    createChat,
    postMessage,
    getAllUserChats, getParticipants,
    getParticipantById,
    getMessageById,
    sendMessage, updateMessage, sendChat, getChatOwnerByChatId, getChatMessages,
} from "../controllers/chatController";
import {validateChat, validateMessage} from "../middlewares/chat/validation";
import {findChatById, findMessageById} from "../middlewares/chat/findChatById";
import {checkPermission, checkMessagePermission} from "../middlewares/chat/checkPermission";

const router = express.Router();


/*
* CHAT
* */
router.get('/chats', getAllUserChats);
router.post('/chat', checkPermission, validateChat, createChat);
router.get('/chat/:chatId', findChatById, checkPermission, sendChat);

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
router.get('/chat/:chatId/message/:messageId', findChatById, findMessageById, checkMessagePermission, sendMessage);
router.put('/chat/message/:id', validateMessage, findMessageById, checkMessagePermission, updateMessage);


export default router;