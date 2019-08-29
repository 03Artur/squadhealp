import {Chat, Message} from '../mongoDbChat';
import * as appError from "../errors";


export async function createChat(req, res, next) {
    try {
        const chat = await Chat.create(req.body);
        if (chat) {
            res.send(chat);
        }
        return next(new appError.BadRequestError())

    } catch (e) {
        next(e);
    }
}

export async function createMessage(req, res, next) {
    try {


        const chat = await Chat.findById(req.params.chatId);



        req.body.authorId = req.accessTokenPayload.id;
        req.body.chatId = chat._id;

        let message = new Message(req.body);
        await message.save(err => {
            if (err) {
                return next(err);
            }
            chat.messages.push(message);
            chat.save(err => {
                if (err) {
                    return next(err);
                }
            })
        });

        if (message) {
            res.send(message);
        }
        return next(new appError.BadRequestError())

    } catch (e) {
        next(e);
    }
}

export async function getAllUserChats(req, res, next) {
    try {
        const {id: userId} = req.accessTokenPayload;
        const chats = await Chat.find({
            participants: userId,
        }).populate();
        res.send(chats);


    } catch (e) {
        next(e);
    }
}

