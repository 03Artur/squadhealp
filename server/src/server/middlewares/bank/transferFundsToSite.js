import {Banks} from '../../models';
import {SQUAD_HELP_BANK_CARD} from '../../constants'
import * as appError from "../../errors";

export default async function transferFundsToSite(req, res, next) {
    try {
        let squadHelpBankCard = await Banks.findByPk(SQUAD_HELP_BANK_CARD.number);
        const {balance} = squadHelpBankCard;
        squadHelpBankCard = await squadHelpBankCard.update({
            balance: (balance + req.bill)
        }, {
            transaction: req.transaction
        });
        if (squadHelpBankCard) {
            return next();
        }

        await req.transaction.rollback();
        return next(new appError.BadRequestError())
    } catch (e) {
        await req.transaction.rollback();

        next(e);
    }

}


