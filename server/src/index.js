import express from 'express';
import router from './server/router/index';
import cors from 'cors';
import errorHandler from './server/middlewares/error'

const PORT = process.env.PORT || 3000;
const app = express();

import authorizationRouter from './server/router/authorizationRouter';

app.use(cors());
app.use(express.json());

//static image files
app.use('/images', express.static('/server/public/images'));

//Authorization
app.use(authorizationRouter);

//Access Token required
app.use(router);

//Error Handler
app.use(errorHandler);

app.listen(PORT);
