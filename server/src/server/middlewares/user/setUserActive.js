import {Users} from '../../models';

async function setUserActive(req, res, next) {

    try {

        req.user = await req.user.update({
            isActive: true,
        });
        return next();


    } catch (e) {
        next(e);
    }

}

export default setUserActive;