import _ from 'lodash';
import {CONTEST_FILTER_PROPS, TASK_FILTER_PROPS, ORDER_PROPS, TASK_RANGE_PROPS} from '../../constants';
import {Contests, Tasks, Sequelize, sequelize} from "../../models";

export function pickContestFilter(req, res, next) {
    try {
        const {query} = req;

        if (_.isEmpty(query)) {
            return next()
        }

        req.contestFilter = _.pick(query, CONTEST_FILTER_PROPS);
        return next();
    } catch (e) {
        next(e)
    }
}

export function pickTaskFilter(req, res, next) {
    try {

        const {query} = req;
        if (_.isEmpty(query)) {
            return next()
        }

        req.taskFilter = _.pick(query, TASK_FILTER_PROPS);
        return next();
    } catch (e) {
        next(e)
    }
}

export function pickTaskRangeFilter(req, res, next) {
    try {
        const {query} = req;
        if (_.isEmpty(query)) {
            return next()
        }
        let taskRangeFilter = _.pick(query, TASK_RANGE_PROPS);

        if (_.isEmpty(taskRangeFilter)) {
            return next();
        }
        const Op = Sequelize.Op;
        taskRangeFilter = _.transform(taskRangeFilter, (object, value, key) => {
            object[key] = {[Op.between]: value,}
        });
        req.taskFilter = _.assign(req.taskFilter,taskRangeFilter);


        return next();

    } catch (e) {
        next(e)
    }
}

export function pickOrder(req, res, next) {
    try {

        const {query} = req;
        if (_.isEmpty(query)) {
            return next()
        }
        const order = _.pick(query, ORDER_PROPS);
        if (order && _.has(order, ORDER_PROPS[1], ORDER_PROPS[0])) {
            req.order = [CONTEST_FILTER_PROPS.includes(order.orderBy) ?
                [Contests, order.orderBy, order.direction] :
                [order.orderBy, order.direction]];
        }

        return next();
    } catch (e) {
        next(e)
    }
}

