import {put} from 'redux-saga/effects';
import ACTION_TYPES from '../actions/actiontsTypes';
import * as contestController from '../api/rest/contestController'


export function* createContestSaga({isNameExist, contest}) {
    yield put({type: ACTION_TYPES.CONTEST_CREATION_CREATE_CONTEST_REQUEST});
    try {

        const {data} = yield contestController.createContest(isNameExist, contest);
        console.log(data);
        yield put({
            type: ACTION_TYPES.CONTEST_CREATION_CREATE_CONTEST_RESPONSE,
            contest: data[0],
        })
    } catch (e) {
        yield put({
            type: ACTION_TYPES.CONTEST_CREATION_ERROR,
            error: {
                status: e.response.status,
                message: e.response.data,
            },
        })
    }
}

export function* getContestInDrawSaga({contestId}) {

    yield put({type: ACTION_TYPES.CONTEST_CREATION_GET_CONTEST_IN_DRAW_REQUEST});
    try {
        const {data: { Tasks: tasks, ...contest}} = yield contestController.getContestById(contestId);
        yield put({
            type: ACTION_TYPES.CONTEST_CREATION_GET_CONTEST_IN_DRAW_RESPONSE,
            contest,
            tasks,
        });
    } catch (e) {
        yield put({
            type: ACTION_TYPES.GET_CONTEST_IN_DRAW_ERROR,
            error: {
                status: e.response.status,
                message: e.response.data,
            },
        });
    }
}

export function* createTaskSaga({contestId, taskFormData}) {
    yield put({type: ACTION_TYPES.CONTEST_CREATION_CREATE_TASK_REQUEST});
    try {
        const {data} = yield contestController.createTask(contestId, taskFormData);
        yield put({
            type: ACTION_TYPES.CONTEST_CREATION_CREATE_TASK_RESPONSE,
            task: data,
        })
    } catch (e) {
        yield put({
            type: ACTION_TYPES.CREATE_TASK_ERROR,
            error: {
                status: e.response.status,
                message: e.response.data,
            },
        })
    }
}

export function* getAllUserContestsSaga({id}) {
    yield put({type: ACTION_TYPES.GET_ALL_USER_CONTESTS_REQUEST});
    try {
        const {data} = yield contestController.getContestsByUserId(id);
        yield put({
            type: ACTION_TYPES.GET_ALL_USER_CONTESTS_RESPONSE,
            contests: data,
        })

    } catch (e) {
        yield put({
            type: ACTION_TYPES.GET_ALL_USER_CONTESTS_ERROR,
            error: {
                status: e.response.status,
                message: e.response.data,
            },
        })
    }
}


export function* contestPaymentSaga({contestId, creditCard}) {
    yield put({type: ACTION_TYPES.CONTEST_PAYMENT_REQUEST});
    try {

        const {data} = yield contestController.contestPaymentById(contestId, creditCard);
        yield put

    } catch (e) {
        yield put({
            type: ACTION_TYPES.CONTEST_PAYMENT_ERROR,
            error: {
                status: e.response.status,
                message: e.response.data,
            },
        })
    }

}

/*export function* getContestInDrawSaga({contestId}) {
    yield put({type: ACTION_TYPES.GET_CONTEST_IN_DRAW_REQUEST});
    try {
        const {data} = yield
    } catch (e) {

    }
}*/





