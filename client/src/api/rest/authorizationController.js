import axios from './';
import {loginURL, signUpURL, refreshTokensUrl, authorizeUrl} from "../baseURL";
import {ACCESS_TOKEN_BEARER, LOCAL_STORAGE_KEYS} from "../../constants";


export const loginUser = (data) => axios.post(loginURL, data).then(setTokensToLocalStorage);
export const signUpUser = (data) => axios.post(signUpURL, data).then(setTokensToLocalStorage);
export const refreshTokens = (data) => axios.post(refreshTokensUrl, data).then(setTokensToLocalStorage);
export const getAuthorizedUser = () => {
    console.group("axios getAuthorizedUser");
    console.groupEnd();
    return axios.get(authorizeUrl)
};

const setTokensToLocalStorage = (response) => {
    console.log('setTokensToLocalStorage');
    localStorage.setItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN_KEY, `${ACCESS_TOKEN_BEARER}${response.data.tokenPair.accessToken}`);
    localStorage.setItem(LOCAL_STORAGE_KEYS.REFRESH_TOKEN_KEY, response.data.tokenPair.refreshToken);
    return response;
};
