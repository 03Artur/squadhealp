import * as appError from "../../errors";

export function checkChatPermission(req, res, next) {
    try {
        const {chat: {participants}, accessTokenPayload: {id: userId}} = req;
        if(participants.includes(userId)){
            next()
        }
        return next(new appError.ForbiddenError())
    } catch (e) {
        next(e);
    }
}