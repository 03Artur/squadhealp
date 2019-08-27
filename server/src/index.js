import express from 'express';
import router from './server/router/index';
import cors from 'cors';
import errorHandler from './server/middlewares/error';
import authorizationRouter from './server/router/authorizationRouter';

const app = require('express')();
app.use(cors());
app.use(express.json());

const server = require('http').Server(app);
const io = require('socket.io')(server);

const PORT = process.env.PORT || 3000;


export const SOCKET_EVENTS = {
    CHAT_MESSAGE: 'CHAT_MESSAGE',
    RECEIVED_MESSAGE: "RECEIVED_MESSAGE",
    TYPING: "TYPING",
    NOTIFY_TYPING: "NOTIFY_TYPING",
    NOTIFY_STOP_TYPING: "NOTIFY_STOP_TYPING",
    STOP_TYPING: "STOP_TYPING",
};
server.listen(3010);

io.on("connection", socket => {
    console.log("user connected");

    socket.on("disconnect", function() {
        console.log("user disconnected");
    });

    //Someone is typing
    socket.on(SOCKET_EVENTS.TYPING, data => {
        socket.emit(SOCKET_EVENTS.NOTIFY_TYPING, {
            user: data.user,
            message: data.message
        });
    });

    //when soemone stops typing
    socket.on(SOCKET_EVENTS.STOP_TYPING, () => {
        socket.emit(SOCKET_EVENTS.NOTIFY_STOP_TYPING);
    });

    socket.on(SOCKET_EVENTS.CHAT_MESSAGE, function(msg) {
        console.log("message: " + msg);

        //message to everyone in port:5000 except yourself.
        socket.emit(SOCKET_EVENTS.RECEIVED_MESSAGE, { message: msg });

        //save chat to the database
        connect.then(db => {
            console.log("connected correctly to the server");
            let chatMessage = new Chat({ message: msg, sender: "Anonymous" });

            chatMessage.save();
        });
    });
});

//static image files
app.use('/images', express.static('/server/public/images'));

//Authorization
app.use(authorizationRouter);

//Access Token required
app.use(router);

//Error Handler
app.use(errorHandler);

app.listen(PORT);
