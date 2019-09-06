import {sequelize, Sequelize, Users, Contests, Tasks, FavoriteTasks,Banks} from '../models';
import appError, {NotFoundError} from '../errors';
import _ from 'lodash';

export const getContests = async (req, res, next) => {
    try {
        const {query: {limit, offset, isFavorite}, accessTokenPayload: {id: userId}, contestFilter, taskFilter, order} = req;


        // const test= await sequelize.query('SELECT COUNT(*) FROM "FavoriteTasks" JOIN "Tasks" "T" on "FavoriteTasks"."taskId" = "T"."id" JOIN "Users" "U" on "FavoriteTasks"."userId" = "U"."id"',{ type: Sequelize.QueryTypes.SELECT });
    //     const test= await sequelize.query(`SELECT "T".*, "C".* , (select count(*) from "FavoriteTasks" as FT join "Users" as U on U.id=FT."userId" and U.id=${userId} where FT."taskId"="T".id) as "isFavorite" from "Tasks" as "T"
    // join "Contests" as "C" on "T"."contestId" = "C".id`,{ type: Sequelize.QueryTypes.SELECT });
    //         res.send(test);

        const result = await Tasks.findAll({

/*
            attributes: ["id","title",[sequelize.literal(`CASE WHEN (select count(*) FROM "FavoriteTasks" as FT JOIN "Users" as U on U.id = FT."userId" and U.id = ${userId} where FT."taskId" = "Tasks".id) = 0 THEN false ELSE true END`),"isFavorite"]],
*/
            attributes: ["id","title",[sequelize.literal(`CASE when count("likes") = 0 then false else true end`),"isFavorite"]],
            include: [{
                model: Contests,
                as: 'contest',
                where: contestFilter,
            }, {
                model: FavoriteTasks,
                as: 'likes',
                attributes: [],
                where: {
                    userId,
                },
                required: isFavorite === 'true',
            }],

            group: ['"Tasks"."id"','"contest"."id"']

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
        const [contest] = (await Contests.upsert(req.body, {
            returning: true,
            include: [{
                model: Tasks,
                as: 'tasks'
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


