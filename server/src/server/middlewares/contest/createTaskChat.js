import {Chat} from '../../mongoModels';
import * as appError from "../../errors";

export async function createTaskChat(req, res, next) {

    try {
        const {accessTokenPayload: {id: userId}, task} = req;

        const chat = await Chat.create({
            participants: [userId],
            ownerId: userId,
            name: `${task.id}. ${task.type} / ${task.style} (${task.cost} \$)`,
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
                });
                return;
            } else {
                await chat.delete();
            }
        }
        return next(new appError.BadRequestError())
    } catch (e) {
        next(e);
    }
}