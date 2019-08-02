import Rule from './Rule'
import {ACTION, ROLE} from "../../../constants";

module.exports = class ActionRule extends Rule {

    constructor(action, canActRoles, canActOwner = true) {
        super(canActRoles, canActOwner);
        this.action = action;
    }

    checkPermission(role, isOwner = false) {
        return super.checkPermission(role, isOwner);
    }

};



