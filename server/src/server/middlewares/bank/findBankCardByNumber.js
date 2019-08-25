import {Banks} from './../../models';
import appError from '../../errors';

export default async (req, res, next) => {
    try {

        const {cvc, number, expiry} = req.body;

        const card = await Banks.findByPk(number);
        if (!card) {
            return next(new appError.NotFoundError())
        }
        if (card.cvc !== cvc || card.expiry !== expiry) {
            return next(new appError.BadRequestError())
        }

        req.creditCard = card;

        return next()

    } catch (e) {
        next(e)
    }
}

