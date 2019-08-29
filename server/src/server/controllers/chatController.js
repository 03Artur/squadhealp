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

export async function createMessage(req,res,next) {
    try{
        req.body.authorId = req.accessTokenPayload.id;
        const chat = Chat.findById(req.params.id);

        const message = new Message(req.body);

        message.save(err => {
            chat.message.push(message);
            chat.save(err => {

            })
        });
        if(message){
            res.send(message);
        }
        return next(new appError.BadRequestError())

    }catch (e) {
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

