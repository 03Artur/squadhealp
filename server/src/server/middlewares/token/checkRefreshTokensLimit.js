import {RefreshToken} from './../../models';
import {DEVICES_COUNT} from "../../constants";
import {sequelize} from '../../models'

async function checkRefreshTokensLimit(req, res, next) {

    try {
        const result = await RefreshToken.findAndCountAll({
            where: {
                userId: req.user.id,
            }
        });
        let transaction = sequelize.transaction();
        if (result.count >= DEVICES_COUNT) {
            result.forEach(item => item.destroy({transaction}));
            transaction.commit();
        }
        return next();
    } catch (e) {
        next(e);
    }


}

export default checkRefreshTokensLimit;
