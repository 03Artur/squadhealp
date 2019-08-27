const mongoose = require("mongoose");
const Schema = mongoose.Shema;

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
        timestamp: true

    }
);

let Chat = mongoose.model("Chat", chatSchema);
module.exports = Chat;



