import {CHAT_ACTION_RULES} from '../constants';

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
        name: {
            type: Schema.Types.String,
            minlength: 1,
            maxlength: 512,
        },
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

chatSchema.index({ ownerId: 1, name: 1 }, { unique: true });

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


