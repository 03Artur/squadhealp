import {sequelize, Contests, Users, FavoriteTasks} from '../../models';
import {ROLES} from "../../constants";

export function addContestExtraContent(req, res, next) {
    try {
        const {query: {isFavorite},contestFilter, accessTokenPayload: {role, id: userId}} = req;

        const include = [{
            model: Contests,
            as: 'contest',
            where: contestFilter,
        }];
        const attributes = {include:[ `"Tasks"."*"`]}

        if (role === ROLES.CREATIVE) {
            include.push({
                model: FavoriteTasks,
                as: 'likes',
                attributes: [],
                where: {
                    userId,
                },
                required: isFavorite === 'true',
            });
            attributes.include.push([sequelize.literal(`CASE WHEN "likes"."id" IS NULL THEN false ELSE true END` ),"isFavorite"])

        }else if(role === ROLES.BUYER){
            include.push({
                model: Users,
                as: 'fans',
                attributes: ['id','firstName','lastName','profilePicture','role'],
                through: { attributes: [] },
                required: isFavorite === 'true',
            })
        }
        req.include = include;
        req.attributes = attributes;
        return next();
    } catch (e) {
        next(e)
    }

}