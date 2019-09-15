import {Entries, Users, Tasks, sequelize, Sequelize} from '../models';
import * as appError from "../errors";
import _ from 'lodash'

export async function getEntries(req, res, next) {
    try {
        const {query, include, attributes} = req;
        const entries = await Entries.findAndCountAll({
            where: query,
            attributes,
            include,
        });
        res.send(entries)
    } catch (e) {
        next(e);
    }
}

export async function rejectEntry(req, res, next) {
    try {
        const {params: {id}} = req;
        let entry = await Entries.findByPk(parseInt(id));
        if (entry) {
            entry = await entry.update({
                isRejected: true,
            }, {
                fields: ['isRejected'],
                returning: true,
            });
            if (entry) {
                res.send(entry);
            }
            return next(new appError.BadRequestError());
        }
        return next(new appError.NotFoundError());
    } catch (e) {
        next(e);
    }
}

export async function postEntry(req, res, next) {
    try {
        const {params: {taskId}, accessTokenPayload: {id: userId}} = req;
        const entry = await Entries.create(_.merge(req.body, {
            taskId,
            userId,
        }));
        if (entry) {
            res.send(entry);
        }
        return next(new appError.BadRequestError())
    } catch (e) {
        next(e);
    }
}

export async function updateEntry(req, res, next) {
    try {
        const {entry: oldEntry, body} = req;
        const entry = await oldEntry.update(body);
        if (entry) {
            res.send(entry);
        }
        return next(new appError.BadRequestError());

    } catch (e) {
        return next(e);
    }
}

export async function setWinner(req, res, next) {
    try {
        const {task: {id: taskId,cost, entries: [entry]}, params: {id}} = req;

        let transaction = await sequelize.transaction();
        const Op = Sequelize.Op;
        await Entries.update({
            isRejected: true,

        },{
            fields: ['isRejected'],
            where: {
                taskId,
                id: {
                    [Op.ne]: id,
                }
            }
        });
        const updatedTask = await req.task.update({
            winnerId: id,
        }, {
            transaction,
            returning: true,
            fields: ['winnerId'],
        });


        const sqlQuery = `UPDATE "Users" SET balance=balance+${cost} WHERE "Users".id=${entry.userId}`;
        const result = (await sequelize.query(sqlQuery, {type: Sequelize.QueryTypes.UPDATE, transaction}));
        await transaction.commit();
        res.send(updatedTask);
    } catch (e) {
        next(e);
    }
}
