import express from 'express';
import router from './server/router/index';
import cors from 'cors';
import errorHandler from './server/middlewares/error';
import authorizationRouter from './server/router/authorizationRouter';

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
server.listen(PORT);


export const SOCKET_EVENTS = {
    CHAT_MESSAGE: 'CHAT_MESSAGE',
    RECEIVED_MESSAGE: "RECEIVED_MESSAGE",
    TYPING: "TYPING",
    NOTIFY_TYPING: "NOTIFY_TYPING",
    NOTIFY_STOP_TYPING: "NOTIFY_STOP_TYPING",
    STOP_TYPING: "STOP_TYPING",
};



io.on("connection", socket => {
    socket.join('test');
    socket.join('alone');

    socket.on("disconnect", function () {
        socket.leave('test');
        socket.leave('alone');
    });

    //Someone is typing
    socket.on(SOCKET_EVENTS.TYPING, (room, data) => {
        socket.broadcast.to(room).emit(SOCKET_EVENTS.NOTIFY_TYPING, {
            user: data.user,
            message: data.message
        });
    });

    socket.on(SOCKET_EVENTS.STOP_TYPING, (room, data) => {
        socket.broadcast.to(room).emit(SOCKET_EVENTS.NOTIFY_STOP_TYPING,data);
    });

    socket.on(SOCKET_EVENTS.CHAT_MESSAGE, function (room, data) {

        socket.broadcast.to(room).emit(SOCKET_EVENTS.RECEIVED_MESSAGE, data);


    });
});

//static image files

