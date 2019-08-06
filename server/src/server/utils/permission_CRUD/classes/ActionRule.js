import Rule from './Rule'

module.exports = class ActionRule extends Rule {

    constructor(action, canActRoles, canActOwner = true) {
        super(canActRoles, canActOwner);
        this.action = action;
    }


};



