
import axios from 'axios';
import {refreshTokens} from './authorizationController'
import {removeTokens} from '../../utils/localStorage'
import {LOCAL_STORAGE_KEYS, PATHS} from "../../constants";
import {apiPaths} from "../apiPaths";

const instance = axios.create({
    baseURL: apiPaths,
});

//INTERCEPTORS:

//REQUEST
instance.interceptors.request.use(config => {
    config.headers.authorization = localStorage.getItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN_KEY);
    console.log(config);
    return config;
}, err => {
    return Promise.reject(err);
});

//RESPONSE
instance.interceptors.response.use(
    response => {
        return response
    },
    async err => {
        const {response: {status}} = err;
        switch (status) {
            case 419: {
                await refreshTokens();
                return instance(err.config);
            }
            case 401: {
                removeTokens();
            }
                break;
        }
        return Promise.reject(err)
    });
/*=========================================*/

export default instance;
