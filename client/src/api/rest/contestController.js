import axios from './';
import {contestUrl, taskUrl} from "../baseURL";


export const createContest = (contest) => axios.post(contestUrl, contest);
export const getContestsByUserId = (id) => axios.get(`${contestUrl}/${id}`);
export const createTask = (task) => axios.post(taskUrl, task);

