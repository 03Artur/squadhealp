import {Users} from './../models';

import {Chat, Message} from '../mongoDbChat';

import * as appError from "../errors";

import array from 'lodash/array';


export async function getMessageById(req, res, next) {
    try {
        const message = await Message.findById(req.params.id);

        if (message) {
            res.send(message);
        }

        return next(new appError.BadRequestError());
    } catch (e) {
        next(e);
    }
}

export async function getMessageAuthorById(req, res, next) {
    try {

        const author = await Users.findByPk(req.params.id, {
            attributes: {
                exclude: ['createdAt', 'updatedAt', 'password', 'email', 'balance', 'isBanned',],
            }
        });

        if (author) {
            res.send(author);
        }

        return next(new appError.NotFoundError('author not found'));

    } catch (e) {
        next(e)
    }
}

export async function createChat(req, res, next) {
    try {
        const {body: data} = req;
        data.ownerId = req.accessTokenPayload.id;
        data.participants.push(req.accessTokenPayload.id);
        data.participants = array.uniq(data.participants);

        const chat = await Chat.create(data);
        if (chat) {
            res.send(chat)
            /*const participants = await Users.findAll({
                where: {
                    id: data.participants,
                },
                attributes: {
                    exclude: ['createdAt','updatedAt','password','email','balance','isBanned',]
                }
            });

            if (participants) {
                res.send({
                    chat,
                    participants,
                });

            }*/
        }


        return next(new appError.BadRequestError())

    } catch (e) {
        next(e);
    }
}

export async function createMessage(req, res, next) {
    try {

        let {chat, body: data, accessTokenPayload: {id: authorId}} = req;

        if (chat.participants.includes(authorId)) {
            data.authorId = authorId;
            data.chatId = chat._id;
            let message = await Message.create(data);
            chat.messages.push(message);
            chat = await chat.save();
            if (message && chat) {
                res.send(message);
            }
        } else {
            return next(new appError.ForbiddenError(''))
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
            if (chat.messages.length) {
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

