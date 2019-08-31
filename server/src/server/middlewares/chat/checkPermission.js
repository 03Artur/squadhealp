import * as appError from "../../errors";
import {Chat, Message} from '../../mongoDbChat'

export async function checkPermission(req, res, next) {
    try {
        const {chat, accessTokenPayload: actor} = req;

        if (await Chat.checkPermission(req.method, chat, actor)) {
            return next();
        }
        return next(new appError.ForbiddenError());
    } catch (e) {
        next(e);
    }
}

export async function checkMessagePermission(req, res, next) {
    try {
        const {chat,message, accessTokenPayload: actor} = req;

        if (await Message.checkPermission(req.method, actor, chat, message)) {
            return next()
        }
        return next(new appError.ForbiddenError());
    } catch (e) {
        next(e);
    }
}

