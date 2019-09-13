import {FavoriteTasks} from '../models';
import * as appError from "../errors";


export async function addFavoriteTask(req, res, next) {
    try {
        const {
            accessTokenPayload: {
                id: userId,
            },
            params: {
                taskId,
            }
        } = req;

        const favoriteTask = await FavoriteTasks.create({
            userId,
            taskId,
        });



        if (favoriteTask) {
            res.send(favoriteTask);
            return;
        }

        return next(new appError.BadRequestError());

    } catch (e) {
        next(e);
    }
}

export async function removeFavoriteTask(req, res, next) {
    try {
        const {
            accessTokenPayload: {
                id: userId,
            },
            params: {
                taskId,
            }
        } = req;
        const rowsNumber = await FavoriteTasks.destroy({
            where: {
                userId,
                taskId: parseInt(taskId),
            }
        });

        res.send({number: rowsNumber});

    } catch (e) {
        next(e);
    }
}
