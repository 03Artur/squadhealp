import axios from './';
import {contestUrl, taskUrl,contestPaymentUrl} from "../baseURL";


export const createContest = (contest) => axios.post(contestUrl, contest);
export const getContestsByUserId = (id) => axios.get(`${contestUrl}/${id}`);
export const createTask = (task) => axios.post(taskUrl, task);
export const contestPaymentById = (contestId,creditCard) => axios.put(`${contestPaymentUrl}/${contestId}`,creditCard);


