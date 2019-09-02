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


    joinUserToRooms(userId, rooms) {

    }

    async addParticipantsToChat(chat, participants) {
        const userToSockets = await UserToSocket.find({
            userId: participants,
        });
        userToSockets.forEach(item => {
            const socket = this.io.sockets.connected[item.socketId];
            socket.join(chat._id, () => {
                socket.emit(SOCKET_EVENTS.RECEIVED_CHAT, chat)
            });
        })
    }

    addChatEvents(socket) {
        socket.on(SOCKET_EVENTS.TYPING, (room, data) => {
            socket.broadcast.to(room).emit(SOCKET_EVENTS.NOTIFY_TYPING, {
                user: data.user,
                message: data.message
            });
        });

        socket.on(SOCKET_EVENTS.STOP_TYPING, (room, data) => {
            socket.broadcast.to(room).emit(SOCKET_EVENTS.NOTIFY_STOP_TYPING, data);
        });

        socket.on(SOCKET_EVENTS.CHAT_MESSAGE, function (room, data) {

            console.log("ROOM: ", room);
            console.log("DATA: ", data);

            io.in(room).emit(SOCKET_EVENTS.RECEIVED_MESSAGE, {
                room,
                message: data,
            });
        });

        socket.on(SOCKET_EVENTS.LOGIN_USER, async (userId) => {
            await UserToSocket.create({
                userId,
                socketId: socket.id,
            });
        })


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

}

const socketHelper = new SocketHelper();

export default socketHelper;
