import Rule from './Rule'

module.exports = class ActionRule extends Rule {

    constructor(action, canActRoles, canActOwner = true) {
        super(canActRoles, canActOwner);
        this.action = action;
    }

    checkPermission(role, isOwner = false) {
        return super.checkPermission(role, isOwner);
    }

};



