/*
* BASE URL
* */
export const baseURL = 'http://localhost:3000';


/*
* AUTHORIZATION
* */
export const loginURL = `/login`;
export const logoutURL = `/logout`;
export const signUpURL = `/signup`;
export const authorizeUrl = `/authorize`;
export const refreshTokensUrl = `/refresh`;

/*
* CRUD CONTEST & TASK URL
* */
export const contestUrl = `/contest`;
export const contestsUrl = `/contests`;
export const taskUrl = `/task`;
export const contestPaymentUrl = '/payment/contest';

export const favoriteUrl = '/favorite';
/*
* ENTRY
* */
export const entryUrl = '/entry';
export const entriesUrl = '/entries';
export const rejectUrl = '/reject';
/*
* ADMIN
* */
export const adminUrl = `/admin`;
export const userUrl = `/user`;
export const usersUrl = `/users`;

/*
* CHAT
* */
export const chatUrl = '/chat';
export const chatsUrl = '/chats';

export const messageUrl = '/message';
export const messagesUrl = '/messages';

export const participantUrl ='/participant';
export const participantsUrl ='/participants';

/*
* Static paths
* */
export const imagesURL = `${baseURL}/images`;
export const ICON_IMAGES_URL = `${imagesURL}/icons`;
export const userPicturesURL = `${imagesURL}/user/userPicture`;
export const defaultUserIcon = `${imagesURL}/icons/user.svg`;
export const defaultUserIconMin = `${imagesURL}/icons/anonumous-min.png`;
