import {Chat, Message} from '../../mongoModels';
import * as appError from "../../errors";


export async function findChatById(req, res, next) {
    try {
        const chat = await Chat.findById(req.params.chatId);
        if (chat) {

            req.chat = chat;
            return next();
        }
        return next(new appError.NotFoundError('chat not found'))
    } catch (e) {
        next(e)
    }
}

export async function findMessageById(req, res, next) {
    try {
        const message = await Message.findById(req.params.messageId);
        if (message) {
            req.message = message;
            req.params.chatId = message.chatId;
            return next();
        }
        return next(new appError.NotFoundError('message not found'))
    } catch (e) {
        next(e)
    }
}
