
import axios from './';
import {refreshTokens} from './authorizationController'
import history from '../../history';
import {removeTokens} from '../../utils/localStorage'

import {LOCAL_STORAGE_KEYS, PATH} from "../../constants";
import {baseURL} from "../baseURL";

const instance = axios.create({
    baseURL: baseURL,
});

instance.interceptors.request.use(config => {
    console.group("axios interceptor REQ");
    const accessToken = localStorage.getItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN_KEY);
    console.log("access Token: ", accessToken);
    if (!config.headers.Authorization && accessToken) {
        config.headers.Authorization = accessToken
    }
    console.log("Config: ", config);
    console.groupEnd();
    return config;

}, err => {
    return Promise.reject(err);
});

instance.interceptors.response.use(
    response => {
        console.log('axios response interceptor good');

        return response
    },
    err => {
        console.log('AXIOS INTERCEPTOR RESPONSE ERROR: ');
        const {config, response: {status}} = err;
        console.log("axios response interceptor error status: ", status);
        console.groupEnd();

        switch (status) {
            case 419: {

                refreshTokens(localStorage.getItem(LOCAL_STORAGE_KEYS.REFRESH_TOKEN_KEY));
                return axios.request(config);
            }
            case 401: {
                removeTokens();
                history.push(PATH.LOGIN);
            }
                break;

            default :
                return Promise.reject(err);
        }

        return Promise.reject(err)
    });

export default instance;
