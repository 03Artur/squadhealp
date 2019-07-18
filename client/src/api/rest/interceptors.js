import axios from 'axios';
import {LOCAL_STORAGE_KEYS} from "../../constants";
import {refreshTokens} from './authorizationController'

/*
axios.interceptors.request.use(config => {
    if (!config.headers.Authorization) {
        config.headers.Authorization = localStorage.getItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN_KEY)
    }
    return config;
}, err => {
    return Promise.reject(err);
});

axios.interceptors.response.use(response => {


    switch (response.status) {

        case 419: {
            return refreshTokens({refreshToken: JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS.REFRESH_TOKEN_KEY))});
        }
        case 401: {
            return response;
        }
        default: {
            return response;
        }
    }


}, err => {
    return Promise.reject(err);
});*/
