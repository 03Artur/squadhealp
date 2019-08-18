import {sequelize, Users, Contests, Tasks} from '../models';
import appError, {NotFoundError} from '../errors';


export const upsertContest = async (req, res, next) => {

    try {

        req.body.userId = req.accessTokenPayload.id;
        const contest = (await Contests.upsert(req.body, {
            returning: true,
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

        const contest = await Contests.findByPk(req.params.id);
        if (!contest) {
            return next(new appError.NotFoundError());
        }
        const newTask = await contest.createTask(req.body);
        if (!newTask) {
            return next(new appError.BadRequestError());
        }
        res.send(newTask);
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

export const activateNextContestTask = async (req, res, next) => {

    try {

        req.contest = await req.contest.update({isPaid: true}, {
            transaction: req.transaction,
        });

        let [,[task]] = await Tasks.update({isActive: true}, {
            where: {
                contestId: req.contest.id,
                isActive: false,
            },
            limit: 1,
            order: [["priority", "DESC"]],
            transaction: req.transaction,
            returning: true,
        });


        const contest = await req.contest.reload({
            transaction: req.transaction
        });

        await req.transaction.commit();

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


