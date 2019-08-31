const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userToSocketSchema = new Schema(
    {
        userId: Number,
        socketId: String,
    },

    {
        autoIndex: true,
    },
);


module.exports = {
    name: 'UserToSocket',
    schema: userToSocketSchema
};



