import {sequelize, Users, Contests, Tasks, FavoriteTasks} from '../models';
import appError, {NotFoundError} from '../errors';
import _ from 'lodash';

export const getContests = async (req, res, next) => {
    try {
        const {query: {limit, offset}, accessTokenPayload: {id: userId}} = req;

        const {contestFilter, taskFilter, order} = req;
        const result = await Tasks.findAll({
            /*where: taskFilter,
            order: order,
            limit,
            offset,*/
            /*include: [{
                model: Contests,
                where: contestFilter,
            },{
                model: Users,
                through:{attributes: ['id']}
            }
            ]*/
            include: {
                model: Users,
                as: 'fans',
                required: false,
                attributes: ['id'],
                through: { attributes: [] },
                where: {
                    id: userId,

                }

            }
        });
        res.send({
            result: {
                result,
            }
        })
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
        const [contest] = (await Contests.upsert(req.body, {
            returning: true,
            include: [{
                model: Tasks,
            }]
        }));
        if (!contest) {
            return next(new appError.BadRequestError())
        }
        res.send(contest);
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
        const newTask = await Tasks.upsert(req.body);

        if (!newTask) {
            return next(new appError.BadRequestError());
        }
        await contest.reload();
        res.send(contest);
    } catch (e) {
        next(e);
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


