import axios from './';
import {loginURL, signUpURL, refreshTokensUrl, authorizeUrl} from "../baseURL";
import {ACCESS_TOKEN_BEARER, LOCAL_STORAGE_KEYS} from "../../constants";


export const loginUser = (data) => axios.post(loginURL, data).then(setTokensToLocalStorage);
export const signUpUser = (data) => axios.post(signUpURL, data).then(setTokensToLocalStorage);
export const refreshTokens = () => axios.post(refreshTokensUrl, {refreshToken: localStorage.getItem(LOCAL_STORAGE_KEYS.REFRESH_TOKEN_KEY)}).then(setTokensToLocalStorage);
export const getAuthorizedUser = () => {
    console.group("axios getAuthorizedUser");
    console.groupEnd();
    return axios.get(authorizeUrl)
};

const setTokensToLocalStorage = (response) => {
    console.group('setTokensToLocalStorage');
    localStorage.setItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN_KEY, `${ACCESS_TOKEN_BEARER}${response.data.tokenPair.accessToken}`);
    console.log("new AC: ",localStorage.getItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN_KEY));
    localStorage.setItem(LOCAL_STORAGE_KEYS.REFRESH_TOKEN_KEY, response.data.tokenPair.refreshToken);
    console.log("new RF: ",localStorage.getItem(LOCAL_STORAGE_KEYS.REFRESH_TOKEN_KEY));

    console.groupEnd();
    return response;
};
