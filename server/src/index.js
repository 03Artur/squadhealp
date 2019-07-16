import express from 'express';
import router from './server/router/index';
import cors from 'cors';
import errorHandler from './server/middlewares/error'
import checkAccessToken from "./server/middlewares/tokens/checkAccessToken";
import authorizationRouter from './server/router/authorizationRouter';
import userRouter from './server/router/userRouter';


const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', router);
//Authorization
app.use(authorizationRouter);
app.use(userRouter);
//Token required
app.use(checkAccessToken);


//Error Handler
app.use(errorHandler);

app.listen(PORT);


