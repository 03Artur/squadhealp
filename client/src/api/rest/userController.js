
import axios from 'axios';
import { usersUrl } from "../baseURL";

export const getUsers = () => axios.get(usersUrl);

