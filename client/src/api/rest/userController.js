import axios from './';
import {usersUrl, userUrl} from "../apiPaths";
//users controller
export const getUsers = (queryString) =>{ return axios.get(usersUrl+queryString)};

//single user controller
export const createUser = (data) => axios.post(userUrl, data);
export const updateUserById = (id, data) => axios.put(`${userUrl}/${id}`, data);
export const deleteUserById = (id) => axios.delete(`${userUrl}/${id}`);
export const getUserById = (id) => axios.get(`${userUrl}/${id}`);




