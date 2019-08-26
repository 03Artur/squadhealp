import {RefreshTokens} from './../../models';
import {DEVICES_COUNT} from "../../constants";
import {sequelize} from '../../models'

async function checkRefreshTokensLimit(req, res, next) {

    try {

        const options = {
            where: {
                userId: req.user.id,
            }
        };

        const count = await RefreshTokens.count(options);


        if (count >= DEVICES_COUNT) {
            const numbersOfDestroyedRows = await RefreshTokens.destroy(options)
            if(numbersOfDestroyedRows === count){
            }
        }
        return next();
    } catch (e) {
        next(e);
    }


}

export default checkRefreshTokensLimit;
