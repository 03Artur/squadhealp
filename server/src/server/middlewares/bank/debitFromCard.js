import {sequelize,} from '../../models';
import {NotFoundError} from "../../errors";


export default async function debitFromCard(req, res, next) {
    try {
        req.transaction = await sequelize.transaction();

        const {balance} = req.creditCard;
        req.creditCard = await req.creditCard.update({
            balance: balance - req.bill
        }, {
            transaction: req.transaction,
            returning: true
        });

        if (req.creditCard) {

            return next();
        }
        await req.transaction.rollback();
        return next(new NotFoundError())
    } catch (e) {
        next(e)
    }

}


