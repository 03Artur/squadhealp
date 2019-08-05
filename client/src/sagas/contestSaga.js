import {put} from 'redux-saga/effects';
import ACTION_TYPE from '../actions/actiontsTypes';
import * as contestController from '../api/rest/contestController'

export function* createContest({contest}) {
    yield put({type: ACTION_TYPE.CREATE_CONTEST_REQUEST});
    try {
        const {data} = yield contestController.createContest(contest);
        yield put({
            type: ACTION_TYPE.CREATE_CONTEST_RESPONSE,
            contest: data,
        })
    } catch (e) {
        yield put({
            type: ACTION_TYPE.CREATE_CONTEST_ERROR,
            error: {
                status: e.response.status,
                message: e.response.data,
            },
        })
    }
}

export function* createTaskSaga({task}) {
    yield put({type: ACTION_TYPE.CREATE_TASK_REQUEST});
    try {
        const {data} = yield contestController.createTask(task);
        yield put({
            type: ACTION_TYPE.CREATE_TASK_RESPONSE,
            task: data,
        })

    } catch (e) {
        yield put({
            type: ACTION_TYPE.CREATE_TASK_ERROR,
            error: {
                status: e.response.status,
                message: e.response.data,
            },
        })
    }
}

export function* getAllUserContestsSaga({id}) {
    yield put({type: ACTION_TYPE.GET_ALL_USER_CONTESTS_REQUEST});
    try {
        const {data} = yield contestController.getContestsByUserId(id);
        yield put({
            type: ACTION_TYPE.GET_ALL_USER_CONTESTS_RESPONSE,
            contests: data,
        })

    } catch (e) {
        yield put({
            type: ACTION_TYPE.GET_ALL_USER_CONTESTS_ERROR,
            error: {
                status: e.response.status,
                message: e.response.data,
            },
        })
    }
}


export function* contestPaymentSaga({contestId, creditCard}) {
    yield put({type: ACTION_TYPE.CONTEST_PAYMENT_REQUEST});
    try {

        const {data} = yield contestController.contestPaymentById(contestId,creditCard);
        yield put

    } catch (e) {
        yield put({
            type: ACTION_TYPE.CONTEST_PAYMENT_ERROR,
            error: {
                status: e.response.status,
                message: e.response.data,
            },
        })
    }

}
