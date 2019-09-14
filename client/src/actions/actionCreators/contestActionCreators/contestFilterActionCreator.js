import CONTEST_ACTION_TYPES from "../../actionTypes/contestActionTypes";


export function addPropsToFilterActionCreator(key, param) {
    return {
        type: CONTEST_ACTION_TYPES.ADD_FILTER_PROPS,
        key,
        param,
    }
}

export function removeFilterPropsActionCreator(key) {
    return {
        type: CONTEST_ACTION_TYPES.REMOVE_FILTER_PROPS,
        key,
    }
}

export function setFilterActionCreator(filter) {
    return {
        type: CONTEST_ACTION_TYPES.SET_FILTER,
        filter,
    }
}

export function resetFilterActionCreator() {
    return {
        type: CONTEST_ACTION_TYPES.RESET_FILTER_ACTION,
    }
}