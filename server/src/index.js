import express from 'express';
import router from './server/router/index';
import cors from 'cors';
import errorHandler from './server/middlewares/error'
import checkAccessToken from "./server/middlewares/tokens/checkAccessToken";
import authorizationRouter from './server/router/authorizationRouter';
import userRouter from './server/router/userRouter';
import path from 'path';

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', router);

//static image files
app.use('/images', express.static('/server/public/images'));

//Authorization
app.use(authorizationRouter);

//Access Token required

/*
app.use(checkAccessToken);
*/


app.use(userRouter);


//Error Handler
app.use(errorHandler);

app.listen(PORT);


