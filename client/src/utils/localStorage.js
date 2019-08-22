import {LOCAL_STORAGE_KEYS} from "../constants";

export const removeTokens = () => {
    console.group('removeTokens');
    localStorage.removeItem(LOCAL_STORAGE_KEYS.REFRESH_TOKEN_KEY);
    localStorage.removeItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN_KEY);
    console.groupEnd()
};

export const setTokens = () => {

};