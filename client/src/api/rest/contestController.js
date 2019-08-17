import axios from './';
import {contestUrl, taskUrl, contestPaymentUrl, userContestsUrl} from "../baseURL";

export  const getContestById = contestId => axios.get(`${contestUrl}/${contestId}`);
export const createContest = (isNameExist,contest) => axios.post(`${contestUrl}?isNameExist=${isNameExist}`, contest);
export const getContestsByUserId = (id) => axios.get(`${userContestsUrl}/${id}`);
export const createTask = (contestId,taskFormData) => axios.post(`/contest/${contestId}/task`, taskFormData);
export const contestPaymentById = (contestId,creditCard) => axios.put(`${contestPaymentUrl}/${contestId}`,creditCard);


