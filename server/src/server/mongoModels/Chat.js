import {CHAT_ACTION_RULES} from '../constants';

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const chatSchema = new Schema(
    {
        taskId: {
            type: Schema.Types.Number,
            required: true,
        },
        ownerId: {
            type: Schema.Types.Number,
            required: true,
        },
        name: {
            type: Schema.Types.String,
            required: true,
            minLength: 1,
            maxLength: 512,
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

chatSchema.index({taskId: 1, ownerId: 1}, {unique: true});

chatSchema.static('checkPermission', (action, chat, actor) => {

        return new Promise(resolve => {
            const rule = CHAT_ACTION_RULES.getRule(action);

            if (rule) {
                resolve(rule.checkPermission(actor, chat));
            }
            resolve(false);
        })

    }
);

module.exports = {
    name: 'Chat',
    schema: chatSchema,
};



