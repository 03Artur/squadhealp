import {sequelize, Sequelize, Users, Contests, Tasks, FavoriteTasks, Banks} from '../models';
import {Chat, Message} from '../mongoModels';

import appError, {NotFoundError} from '../errors';
import _ from 'lodash';
import {ROLES} from '../constants';

export const getContests = async (req, res, next) => {
    try {
        const {
            query: {
                limit,
                offset
            },
            include,
            attributes,
            accessTokenPayload: {
                id: userId,
                role
            },
            contestFilter,
            taskFilter,
            order
        } = req;

        const result = await Tasks.findAndCountAll({
            where: taskFilter,
            include,
            attributes,
            order: sequelize.literal(`"Tasks"."id" DESC`),
            limit,
            offset,
            subQuery: false,
        });

        if (result) {


            res.send(result)
        }
        return next(new appError.NotFoundError());
    } catch (e) {
        next(e);
    }
};

export const upsertContest = async (req, res, next) => {

    try {

        req.body.userId = req.body.userId ? req.body.userId : req.accessTokenPayload.id;

        const [contest] = await Contests.upsert(req.body, {
            returning: true,
            include: [{
                model: Tasks,
                as: 'tasks'
            }]
        });
        if (contest) {
            res.send(contest);
            return;
        }
        return next(new appError.BadRequestError())
    } catch (e) {
        next(e);
    }

};
export const updateContest = async (req, res, next) => {
    try {
        let businessInfo = await Contests.findByPk(req.params.id);
        if (!businessInfo) {
            return next(new appError.BadRequestError())
        }
        businessInfo = await Contests.update(req.body, {
            returning: true,
        });
        res.send(businessInfo);
    } catch (e) {
        next(e);
    }
};

export const createTask = async (req, res, next) => {
    try {
        const {contest} = req;
        req.body.contestId = contest.id;

        const newTask = await Tasks.create(req.body);

        if (newTask) {
            await contest.reload();
            res.send(contest);
        }
        return next(new appError.BadRequestError());
    } catch (e) {
        res.send(e);
    }
};


export const payContestById = async (req, res, next) => {
    try {

    } catch (e) {
        next(e);
    }
};

export const paymentContestTask = async (req, res, next) => {

    try {
        let {contest, transaction} = req;
        contest = await contest.update({isPaid: true}, {
            transaction: transaction,
        });
        await transaction.commit();
        res.send(contest);
    } catch (e) {
        next(e)
    }
};

export const updateTaskById = async (req, res, next) => {
    try {

        let task = await Tasks.findByPk(req.params.id);
        if (!task) {
            return next(new appError.NotFoundError())
        }
        task = await task.update(req.body);

        res.send(task);

    } catch (e) {
        next(e);
    }
};

export const getContestById = async (req, res, next) => {
    try {
        const [contest] = await Contests.findAll({
            where: {
                id: req.params.id
            },
            include: [{
                model: Tasks,
                as: 'tasks'
            }]
        });

        if (contest) {

            res.send(contest);
        } else {
            return next(new appError.NotFoundError());
        }
    } catch (e) {
        next(e);
    }
};


