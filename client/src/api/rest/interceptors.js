import axios from 'axios';
import {refreshTokens} from './authorizationController'
import history from '../../history';

import {LOCAL_STORAGE_KEYS, PATH} from "../../constants";

axios.interceptors.request.use(config => {
    const accessToken = localStorage.getItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN_KEY);
    if (!config.headers.Authorization && accessToken) {
        config.headers.Authorization = accessToken
    }
    return config;
}, err => {
    return Promise.reject(err);
});

axios.interceptors.response.use(
    response => {
        console.log('axios response interceptor good');

        return response
    },
    err => {
        const {config, response: {status}} = err;
        console.log("axios response interceptor error status: ",status);

        switch (status) {
            case 419: {

                //localStorage.clear();
                removeTokens();
                refreshTokens(localStorage.getItem(LOCAL_STORAGE_KEYS.REFRESH_TOKEN_KEY));
                return axios.request(config);
            }
            case 401: {
                history.push(PATH.LOGIN);
            }
                break;

            default :
                return Promise.reject(err);
        }

        return Promise.reject(err)
    });

function removeTokens(){
    console.log("removeTokens");

    localStorage.removeItem(LOCAL_STORAGE_KEYS.REFRESH_TOKEN_KEY);
    localStorage.removeItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN_KEY);
}
