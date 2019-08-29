const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const chatSchema = new Schema(
    {

        participants: [
            Number
        ],
        messages: [{ type: Schema.Types.ObjectId, ref: 'Message' }],
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



