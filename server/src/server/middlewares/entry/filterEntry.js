import {Users, Tasks, sequelize} from '../../models';
import {ROLES} from "../../constants";
import _ from 'lodash';


export function getSelectProps(req, res, next) {
    try {

        const include = [],
            attributes = {include: ['"Entries".id', [sequelize.literal(`CASE WHEN "Entries".id = "task"."winnerId" THEN true ELSE false END`), "isWinner"]]},
            {accessTokenPayload: {role, id}} = req;

        switch (role) {
            case ROLES.BUYER: {
                include.push({
                    model: Users,
                    as: 'user',
                    attributes: {
                        include: ['firstName', 'lastName', 'profilePicture', 'role', 'isBanned', 'id']
                    },
                });
                include.push({
                    model: Tasks,
                    as: 'task',
                    attributes: [],
                });
            }
            break;
            case ROLES.CREATIVE: {
                include.push({
                    model: Tasks,
                    as: 'task',
                });
            }
        }

        req.attributes = attributes;
        req.include = include;
        return next();
    } catch (e) {
        next(e);
    }
}