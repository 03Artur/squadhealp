import express from 'express';
import router from './server/router/index';
import cors from 'cors';

const PORT = process.env.PORT || 9632;
const app = express();

app.use(cors());

app.use(express.json());
app.use('/api', router);

app.listen(PORT);


