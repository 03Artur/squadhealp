import {put} from 'redux-saga/effects';
import ACTION_TYPES from '../actions/actiontsTypes';
import * as contestController from '../api/rest/contestController'
import {CONTEST_CREATION_ALL_STEPS, CREATE_CONTEST_STEPS, TASK_TYPE} from "../constants";
import {contestCreationAddParamToQueryParamsObjCreator} from "../actions/actionCreators/contestActionCreators/contestCreationActionCreators";


export function* createContestSaga({isNameExist, contest}) {
    yield put({type: ACTION_TYPES.CONTEST_CREATION_CREATE_CONTEST_REQUEST});
    try {

        const {data:[_contest]} = yield contestController.createContest(isNameExist, contest);

        yield put({
            type: ACTION_TYPES.CONTEST_CREATION_CREATE_CONTEST_RESPONSE,
            contest: _contest,
        });
        yield put(contestCreationAddParamToQueryParamsObjCreator({contestId: _contest.id,}))
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
        const {data: {Tasks: tasks, ...contest}} = yield contestController.getContestById(contestId);
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
        });
        yield put(contestCreationAddParamToQueryParamsObjCreator({
            [data.type]: data.id
        }));
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

export function* addTaskStepsToContestCreationSteps({types}) {
    const mapSteps = new Map([
        [TASK_TYPE.NAME, CREATE_CONTEST_STEPS.CREATE_NAME_TASK],
        [TASK_TYPE.LOGO, CREATE_CONTEST_STEPS.CREATE_LOGO_TASK],
        [TASK_TYPE.TAGLINE, CREATE_CONTEST_STEPS.CREATE_TAGLINE_TASK],
    ]);
    yield put({
        type: ACTION_TYPES.INSERT_TASK_STEPS_TO_STEPS_ACTION,
        steps: types.map(item => CONTEST_CREATION_ALL_STEPS.get(mapSteps.get(item))),
    })
}

export function* contestPaymentSaga({contestId, creditCard}) {
    yield put({type: ACTION_TYPES.CONTEST_PAYMENT_REQUEST});
    try {

        const {data} = yield contestController.contestPaymentById(contestId, creditCard);


        /* const {data: { Tasks: tasks, ...contest}} = data;
         yield put({
             type: ACTION_TYPES.CONTEST_CREATION_GET_CONTEST_IN_DRAW_RESPONSE,
             contest,
             tasks,
         });*/
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

