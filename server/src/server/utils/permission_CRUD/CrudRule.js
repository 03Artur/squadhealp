import Rule from './Rule'
import {ACTION, ROLE} from "../../constants";

export default class CrudRule{
    /**
     *
     * @param {Array.<Rule>} actionRules
     */
    constructor(create) {
        this.actionRules = actionRules;
    }

    /**
     *
     * @param {ACTION} action
     * @param {ROLE} role
     * @returns {boolean}
     */
    checkPermission(action, role) {
        const actionRule = this.actionRules.find(item => item.action === action);
        if (!actionRule) {
            return undefined;
        }
        return actionRule.checkPermission(role);
    }

}