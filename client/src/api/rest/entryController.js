import axios from './index';
import {contestsUrl, entriesUrl, entryUrl, rejectUrl, taskUrl} from "../baseURL";


export const postEntry = (taskId,entry) => axios.post(`${taskUrl}/${taskId}${entryUrl}`,entry,{
    headers: {
        'Content-Type': 'multipart/form-data',
    }
});

export const getEntry = id => axios.get(`${entryUrl}/${id}`);

export const getEntries = queryString => axios.get(`${entriesUrl}${queryString}`);

export const rejectEntry = id => axios.put(`${entryUrl}/${id}${rejectUrl}`);

export const setWinningEntry = id => axios.post(`${entryUrl}/${id}/win`);