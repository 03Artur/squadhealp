import ACTION_TYPES from './actiontsTypes';

export const getAllEntriesActionCreator = () => {
    return {
        type: ACTION_TYPES.GET_ALL_ENTRIES_ACTION,
    }
};

export const updateEntryActionCreator = (entry) => {
    return {
        type: ACTION_TYPES.UPDATE_ENTRY_ACTION,
        entry,
    }
};

export const deleteEntryActionCreator = (entry) => {
    return {
        type: ACTION_TYPES.DELETE_ENTRY_ACTION,
        entry,
    }
};

export const getEntryActionCreator = (entryId) => {
    return {
        type: ACTION_TYPES.GET_ENTRY_ACTION,
        entryId,
    }
};