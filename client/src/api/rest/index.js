import axios from 'axios';
import {refreshTokens} from './authorizationController'
import history from '../../history';
import {removeTokens} from '../../utils/localStorage'

import {LOCAL_STORAGE_KEYS, PATH} from "../../constants";
import {baseURL} from "../baseURL";

const instance = axios.create({
    baseURL: baseURL,
});
let count = 0;
instance.interceptors.request.use(config => {
    console.log(++count);
    const accessToken = localStorage.getItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN_KEY);
    console.log(accessToken);
    if (config.headers.Authorization !== accessToken) {
        config.headers.Authorization = accessToken
    }

    return config;


}, err => {
    return Promise.reject(err);
});

instance.interceptors.response.use(
    response => {

        return response
    },
    async err => {
        const {response: {status}} = err;

        switch (status) {
            case 419: {

                await refreshTokens();

                return Promise.resolve( instance(err.config));

            }

            case 401: {
                removeTokens();
                history.push(PATH.LOGIN);
                return Promise.reject(err)

            }


            default :
                return Promise.reject(err);
        }

        return Promise.reject(err)
    });

export default instance;