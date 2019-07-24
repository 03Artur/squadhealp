
import axios from 'axios';
import { usersUrl } from "../baseURL";

export const getUsers = (data) => axios.get(usersUrl,data);

