const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const chatSchema = new Schema(
    {
        message: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 512,
        },
        senderId: {
            type: Number,
            required: true,
        },
        addresseeId: {
            type: Number,
            required: true,
        },
    },
    {
        autoIndex: true,
        timestamps: true
    }
);

let Chat = mongoose.model("Chat", chatSchema);
module.exports = Chat;



