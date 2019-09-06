import {Contests, Tasks} from '../../models';
import * as appError from "../../errors";
export default async function findContestById(req, res, next) {
    try{
        const [contest] = await Contests.findAll({
            where: {
                id: req.params.id
            },
            include: [{
                model: Tasks,
                as: 'tasks',
            }]
        });

        if(contest){
            if(contest.isPaid){
                return next(new appError.BadRequestError("contest has already been paid"))
            }
            req.contest = contest;

            return next();
        }
        return next(new appError.NotFoundError())
    }
    catch (e) {

    }

}