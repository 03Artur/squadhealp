import {sequelize, User} from '../models';
import {BusinessInfo, Contest} from '../models';
import appError, {NotFoundError} from '../errors';


export const createBusinessInfo = async (req, res, next) => {

    try {
        const businessInfo = await BusinessInfo.create(req.body);
        if (!businessInfo) {
            return next(new appError.BadRequestError())
        }
        res.send(businessInfo);
    } catch (e) {
        next(e);
    }

};


export const createContest = async (req, res, next) => {

    try {
        const contest = await Contest.create(req.body);
        if (!contest) {
            return next(new appError.BadRequestError())
        }
        res.send(contest);

    } catch (e) {
        next(e)
    }
};

export const activateNextContest = async (req, res, next) => {

    try {
        const businessInfoId = parseInt(req.params.id);
        let contest = (await Contest.findAll({
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

export const updateContestById = async (req, res, next) => {
    try {

        let contest = await Contest.findByPk(req.params.id);
        if (!contest) {
            return next(new appError.NotFoundError())
        }
        contest = await contest.update(req.body);

        res.send(contest);

    } catch (e) {
        next(e);
    }

};
