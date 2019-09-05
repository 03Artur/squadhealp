import {SOCKET_EVENTS} from "../constants";
import {UserToSocket} from '../mongoModels'


/*io.on("connection", socket => {
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

        console.log("ROOM: ",room);
        console.log("DATA: ",data);

        io.in(room).emit(SOCKET_EVENTS.RECEIVED_MESSAGE, {
            room,
            message: data,
        });
    });
});*/


class SocketHelper {

    constructor() {
        this._io = null;
    }

    get io() {
        return this._io;
    }
    set io(ioInstance) {
        this._io = ioInstance;
        this._io.on('connection', socket => {
            socket.on("disconnect", async function () {
                await UserToSocket.deleteOne({
                    socketId: socket.id,
                })
            });
            this.addChatEvents(socket);
        })
    }

    static async addUserSocket(userId, socketId) {
        await UserToSocket.create({
            userId,
            socketId,
        })
    }

    async joinUserToRooms(userId, chats) {
        const userSockets = await UserToSocket.find({
            userId,
        });
        userSockets.forEach(userSocket => {
            const socket = this._io.sockets.connected[userSocket.socketId];
            chats.forEach(chat => {
                    socket.join(chat._id)
                }
            );
        });
    }

    async addParticipantsToChat(chat, participants) {
        const usersToSockets = await UserToSocket.find({
            userId: participants,
        });

        usersToSockets.forEach(participantSocket => {
            const socket = this._io.sockets.connected[participantSocket.socketId];
            socket.join(chat._id);
        });
    }


    addChatEvents(socket) {
        socket.on(SOCKET_EVENTS.AUTHORIZE_USER, async userId => {
            await SocketHelper.addUserSocket(userId, socket.id);
        });

        socket.on(SOCKET_EVENTS.POST_CHAT, chatId => {
            console.log('chat id', chatId);
            socket.to(chatId).emit(SOCKET_EVENTS.GET_CHAT, chatId);

        });
        socket.on(SOCKET_EVENTS.POST_MESSAGE, ({chatId, messageId}) => {
            socket.to(chatId).emit(SOCKET_EVENTS.GET_MESSAGE, messageId)
        })


    }

    get io() {
        return this._io;
    }

    set io(ioInstance) {
        this._io = ioInstance;
        this._io.on('connection',async socket => {

            await UserToSocket.deleteOne({
                socketId: socket.id,
            });

            socket.on("disconnect", async function () {
                await UserToSocket.deleteOne({
                    socketId: socket.id,
                })
            });

            this.addChatEvents(socket);
        })
    }
}

const socketHelper = new SocketHelper();

export default socketHelper;
