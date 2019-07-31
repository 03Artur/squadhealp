/*axios*/
import axios from 'axios';
import {refreshTokens} from './authorizationController'

/*redux*/
import store from '../../store';

/*utils*/
import history from '../../history';
import {removeTokens} from '../../utils/localStorage'
import {LOCAL_STORAGE_KEYS, PATH} from "../../constants";
import {baseURL} from "../baseURL";




const instance = axios.create({
    baseURL: baseURL,
});

let count = 0;

/*
* REQUEST INTERCEPTOR
* */
instance.interceptors.request.use(config => {
    const accessToken = localStorage.getItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN_KEY);
    if (config.headers.Authorization !== accessToken) {
        config.headers.Authorization = accessToken
    }
    console.log(++count, " URL: ", config.url);

    return config;


}, err => {
    return Promise.reject(err);
});


/*
* RESPONSE INTERCEPTOR
* */
instance.interceptors.response.use(
    response => {

        console.group("RESPONSE");
        console.log(response);
        console.groupEnd();
        if()

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
                history.push(PATH.LOGIN);
                return Promise.reject(err)
            }

            default :
                return Promise.reject(err);
        }

        return Promise.reject(err)
    });

export default instance;
