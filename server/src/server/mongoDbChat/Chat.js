const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const chatSchema = new Schema(
    {
        ownerId: {
            type: Schema.Types.Number,
            required: true,
        },
        banList: [
            {
                type: Schema.Types.Number,
            }
        ],
        participants: [
            {
                type: Schema.Types.Number,
            }
        ],
        messages: [{type: Schema.Types.ObjectId, ref: 'Message'}],
    },
    {
        autoIndex: true,
        timestamps: true
    },
);

module.exports = {
    name: 'Chat',
    schema: chatSchema
};



