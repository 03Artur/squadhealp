/*axios*/
import axios from 'axios';
import {refreshTokens} from './authorizationController'


/*utils*/
import history from '../../history';
import {removeTokens} from '../../utils/localStorage'
import {LOCAL_STORAGE_KEYS, PATHS} from "../../constants";
import {authorizeUrl, baseURL} from "../baseURL";


const instance = axios.create({
    baseURL: baseURL,
});

let count = 0;

/*
* REQUEST INTERCEPTOR
* */
instance.interceptors.request.use(config => {
    config.headers.authorization = localStorage.getItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN_KEY);



    console.log(config);
    return config;
}, err => {
    return Promise.reject(err);
});

/*
* RESPONSE INTERCEPTOR
* */
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
                history.push(PATHS.LOGIN);
                return Promise.reject(err)
            }

            default :
                return Promise.reject(err);
        }
        return Promise.reject(err)
    });

export default instance;
