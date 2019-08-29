import {Chat, Message} from '../mongoDbChat';


export async function createChat(req, res, next) {
    try {
        const chat = await Chat.create(req.body);
        if (chat) {
            res.send(chat);
        }

    } catch (e) {
        next(e);
    }
}

export async function getAllUserChats(req, res, next) {
    try {
        const {id: userId} = req.accessTokenPayload;
        const chats = Chat.find({
            participants: userId,
        }).populate({
            path: 'messages',
            options: {
                limit: 1,
            }
        })

    } catch (e) {
        next(e);
    }
}

