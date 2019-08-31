import axios from './';
import {authorUrl, chatUrl, messageUrl} from "../baseURL";


export const getMessageAuthor = id => axios.get(`${authorUrl}/${id}`);
export const postChat = participants => axios.post(chatUrl, {participants});
export const postMessage = (chatId, message) => axios.post(`${chatUrl}/${chatId}${messageUrl}`, message);
export const getMessage = (messageId) => axios.get()
