import axios from './';
import {participantsUrl, chatsUrl, chatUrl, messageUrl, participantUrl, messagesUrl} from "../baseURL";
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

/*
* MESSAGES
* */
export const postMessage = (chatId, message) => axios.post(`${chatUrl}/${chatId}${messageUrl}`, message);

export const getMessages = (chatId, queryString) => axios.get(`${chatUrl}/${chatId}/${messagesUrl}/${queryString}`);
export const getMessage = (messageId) => axios.get(`${messageUrl}/${messageId}`);

//==================================
