import {put, all, call} from 'redux-saga/effects';
import ACTION_TYPES from '../actions/actiontsTypes';
import * as contestController from '../api/rest/contestController'
import {CONTEST_CREATION_ALL_STEPS, CREATE_CONTEST_STEPS, PATHS, TASK_TYPE} from "../constants";
import {addParamToQueryActionCreator} from "../actions/actionCreators/contestActionCreators/contestCreationActionCreators";
import history from "../history";
import queryString from 'query-string';
import CONTEST_ACTION_TYPES from "../actions/actionTypes/contestActionTypes";
import {getEntriesSaga} from "./entrySaga";


const mapSteps = new Map([
    [TASK_TYPE.NAME, CREATE_CONTEST_STEPS.CREATE_NAME_TASK],
    [TASK_TYPE.LOGO, CREATE_CONTEST_STEPS.CREATE_LOGO_TASK],
    [TASK_TYPE.TAGLINE, CREATE_CONTEST_STEPS.CREATE_TAGLINE_TASK],
]);

const getSteps = (types) => {

    return new Promise((resolve, reject) => {
        try {
            const steps = [
                CONTEST_CREATION_ALL_STEPS.get(CREATE_CONTEST_STEPS.SELECT_TASK_TYPE),
                CONTEST_CREATION_ALL_STEPS.get(CREATE_CONTEST_STEPS.CREATE_CONTEST),
                ...types.map(item => CONTEST_CREATION_ALL_STEPS.get(mapSteps.get(item))),
                CONTEST_CREATION_ALL_STEPS.get(CREATE_CONTEST_STEPS.CONTEST_PAYMENT),
            ];

            resolve(steps)

        } catch (e) {
            reject(e);
        }
    });
};


export function* getAllContestSaga({queryString}) {
    try {
        yield put({
            type: ACTION_TYPES.GET_ALL_CONTESTS_REQUEST,
        });

        const {data: {count, rows: contests}} = yield contestController.getAllContests(queryString);

        yield put({
            type: ACTION_TYPES.GET_ALL_CONTESTS_RESPONSE,
            contests,
            count
        })


    } catch (e) {
        yield put({
            type: ACTION_TYPES.GET_ALL_CONTESTS_ERROR,
            error: e.response.data,
        })
    }
}

export function* createContestSaga({isNameExist, contest: values}) {
    yield put({type: ACTION_TYPES.CONTEST_CREATION_REQUEST});
    try {

        const {data: {tasks, ...contest}} = yield contestController.createContest(isNameExist, values);

        yield all([
            put({
                type: ACTION_TYPES.CONTEST_CREATION_RESPONSE,
                contest,
                tasks,
            }),
            put({
                type: ACTION_TYPES.CONTEST_CREATION_ADD_PARAM_TO_QUERY,
                query: {
                    contestId: contest.id,
                },
            })
        ]);

        yield put(addParamToQueryActionCreator({contestId: contest.id,}))
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

export function* getContestInDrawSaga() {


    try {
        const query = queryString.parse(history.location.search);
        let stepIndex = 0;
        if (query.types) {
            yield call(addTaskStepsToContestCreationSteps, {
                types: Array.isArray(query.types) ? query.types : [query.types],
            });
            stepIndex++;
            if (query.contestId) {
                yield put({type: ACTION_TYPES.CONTEST_CREATION_REQUEST});
                const {data: {tasks, ...contest}} = yield contestController.getContestById(query.contestId);
                stepIndex += (tasks.length + 1);
                yield  put({
                    type: ACTION_TYPES.CONTEST_CREATION_RESPONSE,
                    contest: contest,
                    tasks: tasks,
                });
            }
            yield all([
                put({
                    type: ACTION_TYPES.SET_CURRENT_STEP_ACTION,
                    index: stepIndex,
                }),
                put({
                    type: ACTION_TYPES.CONTEST_CREATION_SET_QUERY,
                    query: {
                        types: query.types,
                        contestId: query.contestId,
                    }
                })
            ]);
        }
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
        const {data: {tasks, ...contest}} = yield contestController.createTask(contestId, taskFormData);
        yield all([
            put({
                type: ACTION_TYPES.CONTEST_CREATION_RESPONSE,
                tasks,
                contest,
            }),
            put(addParamToQueryActionCreator({
                contestId: contest.id,
            })),
        ]);
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

    const steps = yield getSteps(types);

    yield all([
        put({
            type: ACTION_TYPES.INSERT_TASK_STEPS_TO_STEPS_ACTION,
            steps,
        }),
        put({
            type: ACTION_TYPES.CONTEST_CREATION_ADD_PARAM_TO_QUERY,
            query: {
                types,
            }
        }),
    ]);

}

export function* contestPaymentSaga({contestId, creditCard}) {
    yield put({type: ACTION_TYPES.CONTEST_CREATION_REQUEST});
    try {
        console.log("Contest id: ", contestId);
        const {data: {tasks, ...contest}} = yield contestController.contestPaymentById(contestId, creditCard);



        yield put({
            type: ACTION_TYPES.CONTEST_CREATION_RESPONSE,
            contest,
            tasks,
        });
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

export function* likeContestSaga({taskId}) {
    yield put({
        type: CONTEST_ACTION_TYPES.LIKE_CONTEST_REQUEST,
    });
    try {
        const {data} = yield contestController.likeTask(taskId);
        console.log(data);
        yield put({
            type: CONTEST_ACTION_TYPES.LIKE_CONTEST_RESPONSE,
            data,
        })
    } catch (e) {
        yield put({
            type: CONTEST_ACTION_TYPES.LIKE_CONTEST_ERROR,
            error: e,
        })
    }
}

export function* dislikeContestSaga({taskId}) {
    yield put({
        type: CONTEST_ACTION_TYPES.DISLIKE_CONTEST_REQUEST,
    });
    try {
        const {data: {number}} = yield contestController.dislikeTask(taskId);
        yield put({
            type: CONTEST_ACTION_TYPES.DISLIKE_CONTEST_RESPONSE,
            data: {taskId},
        })
    } catch (e) {
        yield put({
            type: CONTEST_ACTION_TYPES.DISLIKE_CONTEST_ERROR,
            error: e,
        })
    }
}