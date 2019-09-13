import {SOCKET_EVENTS} from "../constants";

class SocketHelper {

    constructor() {
        this._io = null;
        this.userToSockets = new Map();
    }

    async joinUserToRooms(userId, rooms) {
        const userSocketsSet = this.userToSockets.get(userId);
        if (userSocketsSet) {
            userSocketsSet.forEach(socket => {
                socket.join(rooms);

            })
        }
    }

    async joinUsersToRooms(usersIds, rooms) {
        usersIds.forEach((userId) => {

            this.joinUserToRooms(userId, rooms);
        })
    };

    addSocket(userId, socket) {
        if (this.userToSockets.has(userId)) {
            this.userToSockets.get(userId).add(socket);
        } else {
            this.userToSockets.set(userId, new Set([socket]));
        }
    }

    deleteSocket(userId, socket) {
        if (this.userToSockets.has(userId)) {
            this.userToSockets.get(userId).delete(socket);
        }
    }

    addChatEvents(socket) {

        socket.on(SOCKET_EVENTS.POST_CHAT, chatId => {
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
        this._io.on('connection', async socket => {

            let userId =  parseInt(socket.handshake.query.userId);
            this.addSocket(userId, socket);

            socket.on("disconnect", async () => {
                this.deleteSocket(userId, socket);
            });
            this.addChatEvents(socket);
        })
    }
}

const socketHelper = new SocketHelper();

export default socketHelper;
