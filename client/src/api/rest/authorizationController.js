import axios from './';
import {loginURL, signUpURL, refreshTokensUrl, authorizeUrl} from "../baseURL";
import {ACCESS_TOKEN_BEARER, LOCAL_STORAGE_KEYS} from "../../constants";
import store from "../../store";
import ACTION_TYPES from "../../actions/actiontsTypes";
import {removeTokens} from "../../utils/localStorage";


/*sign IN user*/
export const loginUser = (data) => axios.post(loginURL, data).then(setTokensToLocalStorage);
/*sing UP user*/
export const signUpUser = (data) => axios.post(signUpURL, data).then(setTokensToLocalStorage);
/*refresh token pair by RT*/
export const refreshTokens = () => axios.post(refreshTokensUrl, {refreshToken: localStorage.getItem(LOCAL_STORAGE_KEYS.REFRESH_TOKEN_KEY)}).then(setTokensToLocalStorage);
/*load user from DB by tokens from local storage*/
export const getAuthorizedUser = () => axios.get(authorizeUrl).catch(error => {
    removeTokens();
    return Promise.reject(error);
});


const setTokensToLocalStorage = (response) => {
    localStorage.setItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN_KEY, `${ACCESS_TOKEN_BEARER}${response.data.tokenPair.accessToken}`);
    localStorage.setItem(LOCAL_STORAGE_KEYS.REFRESH_TOKEN_KEY, response.data.tokenPair.refreshToken);
    return response;
};
