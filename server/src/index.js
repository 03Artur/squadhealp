import express from 'express';
import router from './server/router';
import userRouter from './server/router/userRouter';
import cors from 'cors';
import errorHandler from './server/middlewares/error'

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());

app.use(express.json());

app.use('/api', router);
app.use(userRouter);

app.use(errorHandler);

app.listen(PORT);


