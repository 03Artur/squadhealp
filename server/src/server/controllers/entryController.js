import {Entries, Users} from '../models';
import * as appError from "../errors";
import _ from 'lodash'


export async function getEntries(req, res, next) {
    try {

        const {query} = req;
        const entries = await Entries.findAll({
            where: query,
            include: [{
                model: Users,
                attributes: {
                    include: ['firstName', 'lastName', 'profilePicture', 'role', 'isBanned', 'id']
                }
            }]
        });

        res.send(entries | [])


    } catch (e) {
        next(e);
    }
}

export async function rejectEntry(req, res, next) {
    try {
        const {params: {id}} = req;
        let entry = await Entries.findByPk(id);

        entry = await entry.update({
            isReject: true,
        });
        if (entry) {
            res.send(entry);
        }

        return next(new appError.BadRequestError());


    } catch (e) {
        next(new appError.NotFoundError());
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
