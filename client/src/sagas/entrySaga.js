import ENTRY_ACTION_TYPES from "../actions/actionTypes/entryActionTypes";
import {put, all, call} from 'redux-saga/effects';
import * as entryController from '../api/rest/entryController';


export function* postEntrySaga({entry, taskId}) {
    yield put({
        type: ENTRY_ACTION_TYPES.POST_ENTRY_REQUEST,
    });
    try {

        const {data} = yield entryController.postEntry(taskId, entry);
        yield put({
            type: ENTRY_ACTION_TYPES.POST_ENTRY_RESPONSE,
            entry: data,
        })
    } catch (e) {
        yield put({
            type: ENTRY_ACTION_TYPES.POST_ENTRY_ERROR,
            error: e.response.data,
        })
    }
}


export function* getEntrySaga({entryId}) {
    yield put({
        type: ENTRY_ACTION_TYPES.GET_ENTRY_REQUEST,
    });
    try {
        const {data} = yield entryController.getEntry(entryId);

        yield put({
            type: ENTRY_ACTION_TYPES.GET_ENTRY_RESPONSE,
            entry: data,
        })

    } catch (e) {
        yield put({
            type: ENTRY_ACTION_TYPES.GET_ENTRY_ERROR,
            error: e.response.data,
        })
    }
}

export function* getEntriesSaga({queryString}) {
    yield put({
        type: ENTRY_ACTION_TYPES.GET_ENTRIES_REQUEST,
    });
    try {
        const {data: {count, rows: entries}} = yield entryController.getEntries(queryString);

        yield put({
            type: ENTRY_ACTION_TYPES.GET_ENTRIES_RESPONSE,
            entries,
            count,
        })
    } catch (e) {
        yield put({
            type: ENTRY_ACTION_TYPES.GET_ENTRIES_ERROR,
            error: e.response.data,
        })
    }
}

export function* setWinningEntrySaga({entryId}) {
    yield put({
        type: ENTRY_ACTION_TYPES.SET_WINNING_ENTRY_REQUEST,
    });
    try {
        const {data} = yield entryController.setWinningEntry(entryId);

        yield put({
            type: ENTRY_ACTION_TYPES.SET_WINNING_ENTRY_RESPONSE,
            entry: data,
        })

    } catch (e) {
        yield put({
            type: ENTRY_ACTION_TYPES.SET_WINNING_ENTRY_ERROR,
            error: e.response.data,
        })
    }
}

export function* rejectEntrySaga({entryId}) {
    yield put({
        type: ENTRY_ACTION_TYPES.REJECT_ENTRY_REQUEST,
    });
    try {
        const {data} = yield entryController.rejectEntry(entryId);
        yield put({
            type: ENTRY_ACTION_TYPES.REJECT_ENTRY_RESPONSE,
            entry: data,
        })
    } catch (e) {
        yield put({
            type: ENTRY_ACTION_TYPES.REJECT_ENTRY_ERROR,
            error: e.response.data,
        })
    }
}
