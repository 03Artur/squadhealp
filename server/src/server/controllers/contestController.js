import {sequelize, User} from '../models';
import {Contest, ContestTask} from '../models';
import appError, {NotFoundError} from '../errors';


export const createContest = async (req, res, next) => {

    try {

        const businessInfo = await Contest.create(req.body.businessInfo);
        if (!businessInfo) {
            return next(new appError.BadRequestError())
        }
        res.send(businessInfo);
    } catch (e) {
        next(e);
    }

};
export const updateContest = async (req, res, next) => {

    try {
        let businessInfo = await Contest.findByPk(req.params.id);
        if (!businessInfo) {
            return next(new appError.BadRequestError())
        }
        businessInfo = await Contest.update(req.body);

        res.send(businessInfo);
    } catch (e) {
        next(e);
    }

};

export const createContestTask = async (req, res, next) => {

    try {
        const contest = await ContestTask.create(req.body);
        if (!contest) {
            return next(new appError.BadRequestError())
        }
        res.send(contest);

    } catch (e) {
        next(e)
    }
};

export const activateNextContestTask = async (req, res, next) => {

    try {
        const businessInfoId = parseInt(req.params.id);
        let contest = (await ContestTask.findAll({
            where: {
                businessInfoId: businessInfoId,
                isPaid: true,
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

export const updateContestTaskById = async (req, res, next) => {
    try {

        let contest = await ContestTask.findByPk(req.params.id);
        if (!contest) {
            return next(new appError.NotFoundError())
        }
        contest = await contest.update(req.body);

        res.send(contest);

    } catch (e) {
        next(e);
    }

};
