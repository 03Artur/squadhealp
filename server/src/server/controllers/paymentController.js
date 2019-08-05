import {sequelize, Banks, Tasks,} from '../models';
import {Contests, Tasks} from '../models';
import appError, {NotFoundError} from '../errors';
import {SQUAD_HELP_BANK_CARD} from '../constants'

export async function contestPaymentController(req, res, next) {
    try {
        let transaction = await sequelize.transaction();
        const {cost} = req.task;

        let squadHelpCreditCard = await Banks.findByPk(SQUAD_HELP_BANK_CARD.number, {
            transaction,
        });

        let card = await req.creditCard.update({
            balance: (req.creditCard.balance - cost),
        }, {
            transaction,
        });
        squadHelpCreditCard = await squadHelpCreditCard.update({balance: (squadHelpCreditCard.balance + cost)}, {transaction});

        let task = await req.task.update({isPaid: true}, {transaction});
        await transaction.commit();

        res.send(task);


    } catch (e) {
        next(e);
    }

}


