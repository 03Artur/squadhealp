const Rule = require('./Rule.js');


class ChatRule extends Rule {
    constructor(canActRoles, canActOwner = false, canParticipantAct = false) {
        super(canActRoles, canActOwner);
        this.canParticipantAct = canParticipantAct;
    }

    checkPermission(actor, chat) {
        if (chat) {

            if (chat.ownerId === actor.id) {
                return super.checkPermission(actor.role, true)
            }
            if (chat.participants.includes(actor.id)) {

                return this.canParticipantAct;
            }
        }
        return super.checkPermission(actor.role);
    }

}

class MessageRule extends ChatRule {
    constructor(canActRoles, canMessageOwnerAct = false, canChatParticipantAct = false) {
        super(canActRoles, canMessageOwnerAct, canChatParticipantAct);
    }

    checkPermission(actor, chat, message) {
        let permission = false;
        if(message && message.authorId === actor.id){

            return this.canActOwner;
        }
        if(chat){

            return super.checkPermission(actor,chat);
        }


        return permission;


    }
}

module.exports = {
    ChatRule,
    MessageRule,
};

