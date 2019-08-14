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
export const userContestsUrl = `/contests`;
export const taskUrl = `/contest/task`;
export const contestPaymentUrl = '/payment/contest';

/*
* ADMIN
* */
export const adminUrl = `/admin`;
export const userUrl = `/user`;
export const usersUrl = `/users`;

/*
* Static paths
* */
export const imagesURL = `${baseURL}/images`;
export const iconImagesURL = `${baseURL}/images/icons`;
export const userPicturesURL = `${imagesURL}/user/userPicture`;

export const defaultUserIcon = `${imagesURL}/icons/user.svg`;
export const defaultUserIconMin = `${imagesURL}/icons/anonumous-min.png`;
