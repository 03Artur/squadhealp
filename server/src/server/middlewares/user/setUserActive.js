import {User} from '../../models';

async function setUserActive(req, res, next) {

    try {

        req.user = await req.user.update({
            isActive: true,
        });
        next();


    } catch (e) {
        next(e);
    }

}

export default setUserActive;