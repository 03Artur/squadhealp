import {Users} from './../models';
import {Chat, Message} from '../mongoDbChat';
import * as appError from "../errors";
import array from 'lodash/array';
import socketHelper from "../socketHelper/socketHelper";

/*
*
* AUTHORS
* */
export async function getAuthors(req, res, next) {
    try {
        const ids = req.query.authorsIds;
        const authors = await Users.findAll({
            id: ids,
        });

        if (authors) {
            res.send(authors);
        }

        return next(new appError.NotFoundError());

    } catch (e) {
        next(e);
    }
}

export async function getAuthorById(req, res, next) {
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

/*
*
* MESSAGES
* */
export function sendMessage(req, res, next) {
    try {
        res.send(req.message);
    } catch (e) {
        next(e);
    }
}

export async function getMessageById(req, res, next) {
    try {
        const message = await Message.findById(req.params.id);

        if (message) {
            res.send(message);
        }

        return next(new appError.NotFoundError());
    } catch (e) {
        next(e);
    }
}

export async function updateMessage(req, res, next) {
    try {
        const {message} = req;

        message.message = req.body.message;
        const newMessage = await message.save();

        res.send(newMessage);


    } catch (e) {
        next(e);
    }
}

export async function postMessage(req, res, next) {
    try {

        let {chat, body: data, accessTokenPayload: {id: authorId}} = req;
        data.authorId = authorId;
        data.chatId = chat._id;

        let message = await Message.create(data);
        chat.messages.push(message);
        chat = await chat.save();

        if (message && chat) {
            res.send(message);
        }

        return next(new appError.BadRequestError());
    } catch (e) {
        next(e);
    }
}

export async function getChatMessages(req, res, next) {
    try {
        const messages = Message.find()

    } catch (e) {
        next(e);
    }
}


/*
*
* CHATS
* */
export async function sendChat(req, res, next) {
    try {
        res.send(req.chat);
    } catch (e) {
        next(e);
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
            await socketHelper.addParticipantsToChatRoom(chat._id, chat.participants);
            res.send(chat);
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

        const result = chats.reduce(reducer, {
            authorsIds: [],
            rooms: [],
        });
        res.send(result);
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
        }
        return next(new appError.BadRequestError());

    } catch (e) {
        next(e);
    }
}

/*
* UTILS
* */

const reducer = (accumulator, chat) => {
    if (chat.messages.length) {
        return accumulator.authorsIds.push(chat.messages[0].authorId)
    }
    accumulator.rooms.push(chat._id);
    return accumulator;
};
