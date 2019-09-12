import {Chat} from '../../mongoModels';
import * as appError from "../../errors";


export default async function createTaskChat(req, res, next) {
    try {
        const {accessTokenPayload: {id: userId}, task} = req;

        const chat = await Chat.create({
            participants: [userId],
            ownerId: userId,
            name: `${task.title} (${task.type} / ${task.style})`,
        });
        if (chat) {
            const updatedTask = await task.update({
                chatId: chat._id.toString(),
            }, {
                fields: ['chatId'],
            });
            if (updatedTask) {
                res.send({
                        chat,
                        task: updatedTask
                    }
                );
            }
        }

        next(new appError.BadRequestError())

    } catch
        (e) {
        next(e);
    }
}