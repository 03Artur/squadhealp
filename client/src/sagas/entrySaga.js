import ENTRY_ACTION_TYPES from "../actions/actionTypes/entryActionTypes";
import {put, all, call} from 'redux-saga/effects';


export function* postEntrySaga({entry}) {
    try {
        yield put({
            type: ENTRY_ACTION_TYPES.POST_ENTRY_REQUEST,
        })
        const {data} = yield

    } catch (e) {

    }
}


export function* getEntriesSaga({queryString}) {
    try {

    } catch (e) {

    }
}

export function* setWinningEntrySaga({entryId}) {
    try {

    } catch (e) {

    }
}

export function* rejectEntrySaga({entryId}) {
    try {

    } catch (e) {

    }
}
