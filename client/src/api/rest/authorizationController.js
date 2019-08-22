import axios from './';
import {loginURL, signUpURL, refreshTokensUrl, authorizeUrl, logoutURL} from "../baseURL";
import {ACCESS_TOKEN_BEARER, LOCAL_STORAGE_KEYS, PATHS} from "../../constants";
import {removeTokens} from "../../utils/localStorage";
import history from "../../history";


/*sign IN user*/
export const loginUser = (data) => axios.post(loginURL, data).then(setTokensToLocalStorage);

/*sing UP user*/
export const signUpUser = (data) => axios.post(signUpURL, data).then(setTokensToLocalStorage);

/*refresh token pair by RT*/
export const refreshTokens = () => axios.post(refreshTokensUrl, {refreshToken: localStorage.getItem(LOCAL_STORAGE_KEYS.REFRESH_TOKEN_KEY)}).then(setTokensToLocalStorage);

/*logout*/
export const logoutUser = () => axios.delete(`${logoutURL}?tokenString=${localStorage.getItem(LOCAL_STORAGE_KEYS.REFRESH_TOKEN_KEY)}`).then(response => {
    console.group('logoutUser then:');
    console.log(response);
    console.groupEnd();
    removeTokens();

    return Promise.resolve(response);
}).catch(error => {
    console.group('logoutUser error:');
    console.log(error);
    console.groupEnd();
    removeTokens();
    return  Promise.reject(error);
});

/*load user from DB by tokens from local storage*/
export const getAuthorizedUser = () => axios.get(authorizeUrl).catch(error => {
    removeTokens();
    history.push(PATHS.HOME);
    return Promise.reject(error);
});


const setTokensToLocalStorage = (response) => {
    localStorage.setItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN_KEY, `${ACCESS_TOKEN_BEARER}${response.data.tokenPair.accessToken}`);
    localStorage.setItem(LOCAL_STORAGE_KEYS.REFRESH_TOKEN_KEY, response.data.tokenPair.refreshToken);
    return response;
};
