import {Users} from './../models';
import {Chat, Message} from '../mongoModels';
import * as appError from "../errors";
import array from 'lodash/array';
import socketHelper from "../socketHelper/socketHelper";

/*
* PARTICIPANT
* */
export async function getParticipants(req, res, next) {
    try {
        let {query: {id}} = req;
        id = array.uniq(id);
        const authors = await Users.findAll({
            id: id,
        });
        if (authors) {
            res.send(authors);
        }
        return next(new appError.NotFoundError());

    } catch (e) {
        next(e);
    }
}

export async function getParticipantById(req, res, next) {
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
* MESSAGE
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
        const {chat, query} = req;
        const messages = await Message.find(
            {
                chatId: chat._id,
            },
            null,
            {
                limit: parseInt(query.limit),

                skip: parseInt(query.skip),
                sort: {
                    updatedAt: -1,
                },
            }
        );

        if (messages) {
            res.send(messages)
        }
        return next(new appError.NotFoundError());

    } catch (e) {
        next(e);
    }
}

/*
* CHAT
* */
export async function joinToChat(req, res, next) {
    try {
        const {accessTokenPayload: {id: userId}, params: {chatId}} = req;
        let chat = await Chat.findById(chatId).populate({
            path: 'messages',
            options: {
                limit: 20,
                sort: {
                    updatedAt: -1,
                },
                retainNullValues: false,
            }
        });
        if (chat) {
            chat.participants.addToSet(userId);
            chat = await chat.save();
            res.send(chat);
            await socketHelper.joinUserToRooms(userId, chat._id);
            return;
        }

        return next(new appError.NotFoundError());
    } catch (e) {
        next(e);
    }
}

export async function sendChat(req, res, next) {
    try {
        const {accessTokenPayload: {id: userId}, chat} = req;
        res.send(chat);
        await socketHelper.joinUserToRooms(userId, chat._id)
    } catch (e) {
        next(e);
    }
}

export async function createChat(req, res, next) {
    try {
        const {body: data, accessTokenPayload: {id: ownerId}} = req;

        data.ownerId = ownerId;
        data.participants.push(ownerId);
        data.participants = array.uniq(data.participants);
        const chat = await Chat.create(data);
        res.send({chat,});
        if (chat) {
            res.send(chat);
        }

        return next(new appError.BadRequestError());

    } catch (e) {
        next(e);
    }
}

export async function getChatByQuery(req, res, next) {
    try {
        const {query, accessTokenPayload: {id: userId}} = req;

        const chat = await Chat.findOne(query).populate({
            path: 'messages',
            options: {
                limit: 20,
                sort: {
                    updatedAt: -1,
                },
                retainNullValues: false,
            }
        });

        if (chat) {
            const participants = await getMessagesAuthors(chat.messages);
            res.send({
                chat,
                participants,
            });
            await socketHelper.joinUserToRooms(userId, chat._id);
            return;
        }
        return next(new appError.NotFoundError('chat not found'));

    } catch (e) {
        next(e)
    }
}


export async function getAllUserChats(req, res, next) {
    try {

        const {id: userId} = req.accessTokenPayload;

        const chats = await Chat.find({
            participants: userId,
        }).populate({
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
            participantsId: [],
            rooms: [],
        });
        const participants = await Users.findAll({
            where: {
                id: result.participantsId,
            },
            attributes: {
                exclude: ['createdAt', 'updatedAt', 'password', 'email', 'balance', 'isBanned',],
            }
        });

        if (participants) {
            res.send({
                chats,
                participants,
            });
            await socketHelper.joinUserToRooms(userId, result.rooms);
        }
        return next(new appError.BadRequestError());

    } catch (e) {
        next(e);
    }
}

/*
* UTILS
* */
const getMessagesAuthors = async messages => {
    try {

        if (messages && messages.length) {

            let usersIds = messages.reduce((usersIds, message) => {
                usersIds.push(message.authorId);
                return usersIds;
            }, []);
            usersIds = _.uniq(usersIds);

            return await Users.findAll({
                where: {
                    id: usersIds
                },
                attributes: {
                    exclude: ['createdAt', 'updatedAt', 'password', 'email', 'balance', 'isBanned',],
                }
            });
        }
    } catch (e) {
        throw e;
    }
};

const reducer = (accumulator, chat) => {

    if (chat.messages.length) {
        accumulator.participantsId.push(chat.messages[0].authorId);
    }
    accumulator.participantsId.push(chat.ownerId);
    accumulator.rooms.push(chat._id);
    return accumulator;
};
