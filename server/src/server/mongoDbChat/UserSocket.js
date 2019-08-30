const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSocketSchema = new Schema(
    {
        userId: Number,
        socketId: String,
    },
    {
        autoIndex: true,
    },
);


module.exports = {
    name: 'UserSocket',
    schema: userSocketSchema
};



