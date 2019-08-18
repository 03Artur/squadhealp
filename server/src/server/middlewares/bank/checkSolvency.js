import appError from '../../errors'

export default async (req, res, next) => {
    try {


        req.bill = req.contest.Tasks.reduce((sum, task) => sum + task.cost, 0);
/*
        res.send({value: req.bill});
*/
        if (req.creditCard.balance > req.bill) {

            return next();
        }
        return next(new appError.BadRequestError());

    } catch (e) {
        next(e)
    }
}