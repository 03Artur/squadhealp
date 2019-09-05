import ENTRY_ACTION_TYPES from "../../actionTypes/entryActionTypes";

export function getEntriesActionCreator(queryString) {
    return {
        type: ENTRY_ACTION_TYPES.GET_ENTRIES_ACTION,
        queryString,
    }
}

export function postEntryActionCreator(entry) {
    return {
        type: ENTRY_ACTION_TYPES.POST_ENTRY_ACTION,
        entry,
    }
}

export function setWinningEntryActionCreator(entryId) {
    return {
        type: ENTRY_ACTION_TYPES.SET_WINNING_ENTRY_ACTION,
        entryId,
    }
}

export function rejectEntryActionCreator(entryId) {
    return {
        type: ENTRY_ACTION_TYPES.REJECT_ENTRY_ACTION,
        entryId,

    }
}
