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


module.exports = {
    name: 'UserToSocket',
    schema: userToSocketSchema
};



