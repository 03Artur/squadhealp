import {sequelize, Users} from '../models';
import {Contests, Tasks} from '../models';
import appError, {NotFoundError} from '../errors';


export const createContest = async (req, res, next) => {

    try {

        req.body.userId = req.accessTokenPayload.id;

        const contest = await Contests.create(req.body);
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
        businessInfo = await Contests.update(req.body);

        res.send(businessInfo);
    } catch (e) {
        next(e);
    }

};

export const createTask = async (req, res, next) => {

    try {
        res.send(req.accessTokenPayload);
        const task = await Tasks.create(req.body);
        if (!task) {
            return next(new appError.BadRequestError())
        }
        res.send(task);

    } catch (e) {
        next(e)
    }
};

export const activateNextContestTask = async (req, res, next) => {

    try {
        let transaction = sequelize.transaction();

        const businessInfoId = parseInt(req.params.id);

        let contest = (await Tasks.findAll({
            where: {
                businessInfoId: businessInfoId,
                isPaid: true,
                isActive: false,
            },
            limit: 1,
            order: [["priority", "DESC"]],
        }))[0];
        if (!contest) {
            return next(new appError.NotFoundError())
        }
        contest = await contest.update({isActive: true});
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
