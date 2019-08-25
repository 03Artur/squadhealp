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

            }]
        });

        if(contest){
            req.contest = contest;

            return next();
        }
        return next(new appError.NotFoundError())
    }
    catch (e) {

    }

}