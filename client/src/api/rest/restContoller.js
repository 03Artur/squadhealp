import axios from 'axios';
import { restURL } from '../baseURL';

export const getGoods = () => axios.get(`${restURL}/goods`);
export const getOneGoods = id => axios.get(`${restURL}/goods/id/${id}`);
