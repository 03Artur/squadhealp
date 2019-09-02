import axios from './';
import { participantsUrl, chatsUrl, chatUrl, messageUrl, participantUrl} from "../baseURL";
import queryString from 'query-string';


/*
* CHAT
* */
export const getUserChats = () => axios.get(chatsUrl);
export const postChat = chat => axios.post(chatUrl, chat);
export const getChat = chatId => axios.get(`${chatsUrl}${chatId}`);

/*
* PARTICIPANTS
* */
export const getParticipants = (queryString) => axios.get(`${participantsUrl}${queryString}`);
export const getParticipant = id => axios.get(`${participantUrl}/${id}`);

//==================================
export const postMessage = (chatId, message) => axios.post(`${chatUrl}/${chatId}${messageUrl}`, message);
export const getMessage = (messageId) => axios.get();
