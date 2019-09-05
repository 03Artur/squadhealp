import CONTEST_ACTION_TYPES from "../../actionTypes/contestActionTypes";

export function paginationOffsetIncrementActionCreator(offset) {
    return {
        type: CONTEST_ACTION_TYPES.PAGINATION_OFFSET_INCREMENT,
        offset,
    }
}

export function paginationOffsetDecrementActionCreator(offset) {
    return {
        type: CONTEST_ACTION_TYPES.PAGINATION_OFFSET_DECREMENT,
        offset,
    }
}

export function setPaginationOffsetActionCreator(offset) {
    return {
        type: CONTEST_ACTION_TYPES.SET_PAGINATION_OFFSET,
        offset,
    }
}

export function setPaginationLimitActionCreator(limit) {
    return {
        type: CONTEST_ACTION_TYPES.SET_PAGINATION_LIMIT,
        limit,
    }
}

export function paginationResetActionCreator() {
    return {
        type: CONTEST_ACTION_TYPES.PAGINATION_RESET,
    }
}

