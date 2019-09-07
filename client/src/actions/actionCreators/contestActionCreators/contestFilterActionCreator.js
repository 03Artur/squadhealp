import CONTEST_ACTION_TYPES from "../../actionTypes/contestActionTypes";


export function addPropsToFilterActionCreator(value) {
    return {
        type: CONTEST_ACTION_TYPES.ADD_FILTER_PROPS,
        value,
    }
}

export function removeFilterPropsActionCreator(keys) {
    return {
        type: CONTEST_ACTION_TYPES.REMOVE_FILTER_PROPS,
        keys
    }
}

export function setFilterActionCreator(filter) {
    return {
        type: CONTEST_ACTION_TYPES.SET_FILTER,
        filter,
    }
}


