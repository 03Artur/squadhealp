const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const messageSchema = new Schema(
    {
        message: {
            type: Schema.Types.String,
            required: true,
            minLength: 1,
            maxLength: 512,
        },
        authorId: {
            type: Schema.Types.Number,
            required: true,
        },
        chatId: {
            type: Schema.Types.ObjectId,
            ref: 'Chat',
            required: true,

        }
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



