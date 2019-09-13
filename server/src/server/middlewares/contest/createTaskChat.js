
import {Chat} from '../../mongoModels';
import * as appError from "../../errors";

export default async function createTaskChat(req, res, next) {
    const session = await Chat.startSession();
    session.startTransaction();
    try {
        const {accessTokenPayload: {id: userId}, task} = req;
        const chat = await Chat.create({
            participants: [userId],
            ownerId: userId,
            name: `${task.title} (${task.type} / ${task.style})`,
        }, {
            session,
        });
        if (chat) {
            const updatedTask = await task.update({
                chatId: chat._id.toString(),
            }, {
                fields: ['chatId'],
            });
            if (updatedTask) {
                await session.commitTransaction();
                session.endSession();
                res.send({
                        chat,
                        task: updatedTask
                    });
                return;
            }
        }
        await session.abortTransaction();
        session.endSession();
        next(new appError.BadRequestError())

    } catch (e) {
        await session.abortTransaction();
        session.endSession();
        next(e);
    }
}