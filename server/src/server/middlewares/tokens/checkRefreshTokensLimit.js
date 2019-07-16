import {RefreshToken} from './../../models';
import {DEVICES_COUNT} from "../../utils/constants";

async function checkRefreshTokensLimit(req, res, next) {

    try {
        console.log("checkRefreshTokensLimit");
        const refreshTokenCount = await RefreshToken.count({
            where: {
                userId: req.user.id,
            }
        });
        if (refreshTokenCount >= DEVICES_COUNT) {
            const result = await RefreshToken.destroy({
                where: {
                    userId: req.user.id,
                }
            });
        }
        next();

    } catch (e) {
        next(e);
    }


}

export default checkRefreshTokensLimit;
