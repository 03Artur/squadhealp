import axios from './';
import {loginURL, signUpURL, refreshTokensUrl, authorizeUrl, logoutURL} from "../baseURL";
import {ACCESS_TOKEN_BEARER, LOCAL_STORAGE_KEYS} from "../../constants";
import {removeTokens} from "../../utils/localStorage";


export const loginUser = (data) => axios.post(loginURL, data).then(setTokensToLocalStorage);
export const signUpUser = (data) => axios.post(signUpURL, data).then(setTokensToLocalStorage);
export const refreshTokens = () => axios.post(refreshTokensUrl, {refreshToken: localStorage.getItem(LOCAL_STORAGE_KEYS.REFRESH_TOKEN_KEY)})
    .then(setTokensToLocalStorage);
export const logoutUser = () => axios.delete(`${logoutURL}?tokenString=${localStorage.getItem(LOCAL_STORAGE_KEYS.REFRESH_TOKEN_KEY)}`)
    .then(response => {
        removeTokens();
        return Promise.resolve(response);
    }).catch(onAuthorizeError);
export const getAuthorizedUser = () => axios.get(authorizeUrl)
    .catch(onAuthorizeError);



const setTokensToLocalStorage = (response) => {
    localStorage.setItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN_KEY, `${ACCESS_TOKEN_BEARER}${response.data.tokenPair.accessToken}`);
    localStorage.setItem(LOCAL_STORAGE_KEYS.REFRESH_TOKEN_KEY, response.data.tokenPair.refreshToken);
    return Promise.resolve(response);
};
const onAuthorizeError = error => {
    removeTokens();
    return Promise.reject(error);
};