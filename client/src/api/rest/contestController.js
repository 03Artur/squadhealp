import axios from './';
import {contestUrl, taskUrl, contestPaymentUrl, contestsUrl, favoriteUrl} from "../baseURL";

export const getContestById = contestId => axios.get(`${contestUrl}/${contestId}`);
export const createContest = (isNameExist, contest) => axios.post(`${contestUrl}?isNameExist=${isNameExist}`, contest);
export const getContestsByUserId = (id) => axios.get(`${contestsUrl}/${id}`);
export const createTask = (contestId, taskFormData) => axios.post(`/contest/${contestId}/task`, taskFormData, {
    headers: {
        'Content-Type': 'multipart/form-data',
    }
});
export const contestPaymentById = (contestId, creditCard) => {console.log('req');  return axios.post(`${contestPaymentUrl}/${contestId}`, creditCard)};

export const getAllContests = queryString => axios.get(`${contestsUrl}${queryString}`);

export const likeTask = taskId => axios.post(`${favoriteUrl}${taskUrl}/${taskId}`);
export const dislikeTask = taskId => axios.delete(`${favoriteUrl}${taskUrl}/${taskId}`);