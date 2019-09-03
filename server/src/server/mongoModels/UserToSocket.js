const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userToSocketSchema = new Schema(
    {
        userId: Schema.Types.Mixed,
        socketId: Schema.Types.Mixed,
    },

    {
        autoIndex: true,
    },
);
userToSocketSchema.index({ userId: 1, socketId: 1 }, { unique: true });

module.exports = {
    name: 'UserToSocket',
    schema: userToSocketSchema
};



