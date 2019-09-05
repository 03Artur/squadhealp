import axios from './index';
import {entriesUrl, entryUrl} from "../baseURL";


export const postEntry = entry => axios.post(entryUrl,entry);

export const getEntry = id => axios.get(`${entryUrl}/${id}`);

export const getEntries = queryString => axios.get(`${entriesUrl}${queryString()}`);

export const rejectEntry = id => axios.put(`${entryUrl}/${id}`);

export const set = entry => axios.post(entryUrl,entry);