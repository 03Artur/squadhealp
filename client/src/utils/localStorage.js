import {LOCAL_STORAGE_KEYS} from "../constants";

export const removeTokens = () => {

    localStorage.removeItem(LOCAL_STORAGE_KEYS.REFRESH_TOKEN_KEY);
    localStorage.removeItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN_KEY);
};

export const setTokens = () => {

};