import {MESSAGE_ACTION_RULES} from "../constants";

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

messageSchema.static('checkPermission', (action, actor, chat,message) => {

        return new Promise(resolve => {
            const rule = MESSAGE_ACTION_RULES.getRule(action);

            if (rule) {
                resolve(rule.checkPermission(actor, chat, message));
            }
            resolve(false);
        })

    }
);


module.exports = {
    name: 'Message',
    schema: messageSchema
};



