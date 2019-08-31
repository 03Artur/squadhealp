import express from 'express';
import router from './server/router/index';
import cors from 'cors';
import errorHandler from './server/middlewares/error';
import authorizationRouter from './server/router/authorizationRouter';
import socketHelper from "./server/socketHelper/socketHelper";

const app = require('express')();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use('/images', express.static('/server/public/images'));

//Authorization
app.use(authorizationRouter);

//Access Token required
app.use(router);

//Error Handler
app.use(errorHandler);


const server = require('http').Server(app);
const io = require('socket.io')(server);
socketHelper.io = io;

server.listen(PORT);


//static image files

