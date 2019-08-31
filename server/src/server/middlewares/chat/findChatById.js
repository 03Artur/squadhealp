import {Chat} from '../../mongoDbChat';
import * as appError from "../../errors";


export async function findChatBuId(req, res, next) {
    try {
        const chat = await Chat.findById(req.params.chatId);
        if (chat) {
            req.chat = chat;
            return next();
        }
        return next(new appError.NotFoundError())
    } catch (e) {
        next(e)
    }
}


