import _ from 'lodash';
import {CONTEST_FILTER_PROPS, TASK_FILTER_PROPS,ORDER_PROPS} from '../../constants';
import {Contests, Tasks} from "../../models";

export function pickContestFilter(req, res, next) {
    try {
        const {query} = req;
        if(_.isEmpty(query)){
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
        if(_.isEmpty(query)){
            return next()
        }

        req.taskFilter = _.pick(query, TASK_FILTER_PROPS);
        return next();
    } catch (e) {
        next(e)
    }
}

export function pickOrder(req, res, next) {
        try{

            const {query} = req;
            if(_.isEmpty(query)){
                return next()
            }
            req.orderProps = _.pick(query,ORDER_PROPS);
            return next();
        }catch (e) {
            next(e)
        }
}

export function getContestTaskOrder(req, res, next) {
    try {
        const {orderProps} = req;

        if(orderProps){
            req.order = [CONTEST_FILTER_PROPS.includes(orderProps.orderBy) ?
                [Contests, orderProps.orderBy, orderProps.order] :
                [orderProps.orderBy, orderProps.order]];        }

        return next();
    } catch (e) {

    }
}

