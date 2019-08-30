import {Users} from './../models';

import {Chat, Message} from '../mongoDbChat';

import * as appError from "../errors";

export async function createChat(req, res, next) {
    try {
        req.body.ownerId = req.accessTokenPayload.id;
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
        let message = await Message.create(req.body);
        chat.messages.push(message);
        await chat.save();
        res.send(chat);
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
        const chats = await Chat.find(
            {
                participants: userId,
            }
        ).populate({
            path: 'messages',
            options: {
                limit: 1,
                sort: {
                    updatedAt: -1,
                },
                retainNullValues: false,

            }
        });

        const authorsIds = chats.reduce((ids, chat) => {
            if(chat.messages.length){
                return ids.concat(chat.messages[0].authorId)
            }
            return ids;
        }, []);
        const authors = await Users.findAll({
            where: {
                id: authorsIds
            }
        });

        if (authors) {
            res.send({
                chats,
                authors: authors
            });
        } else {
            res.send({f: 'asdasd'})
        }

    } catch (e) {
        next(e);
    }
}

