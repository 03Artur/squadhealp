const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const messageSchema = new Schema(
    {
        message: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 512,
        },
        authorId: {
            type: Number,
            required: true,
        },
        chatId: {type: Schema.Types.ObjectId, ref: 'Chat'}
    },
    {
        autoIndex: true,
        timestamps: true,
    }
);

module.exports = {
    name: 'Message',
    schema: messageSchema
};



