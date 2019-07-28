import axios from 'axios';
import {usersUrl, userUrl} from "../baseURL";

//users controller
export const getUsers = () => axios.get(usersUrl);

//single user controller
export const createUser = (data) => axios.post(userUrl, data);
export const updateUserById = (id, data) => axios.put(`${userUrl}/${id}`, data);
export const deleteUserById = (id, data) => axios.delete(`${userUrl}/${id}`);
export const getUserById = (id, data) => axios.get(`${userUrl}/${id}`);




