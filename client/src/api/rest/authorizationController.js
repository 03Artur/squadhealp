import axios from 'axios';
import {loginURL, signUpURL, refreshTokensUrl} from "../baseURL";
import {LOCAL_STORAGE_KEYS} from "../../constants";



export const loginUser = (data) => axios.post(loginURL, data).then(setTokensToLocalStorage);
export const signUpUser = (data) => {console.log('axios: signUpUser: ',data); return axios.post(signUpURL, data).then(setTokensToLocalStorage)};
export const refreshTokens = (data) => axios.post(refreshTokensUrl, data).then(setTokensToLocalStorage);




const setTokensToLocalStorage = (response) => {
    localStorage.setItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN_KEY, JSON.stringify(response.data.tokenPair.accessToken));
    localStorage.setItem(LOCAL_STORAGE_KEYS.REFRESH_TOKEN_KEY, JSON.stringify(response.data.tokenPair.refreshToken));
    return response;
};
