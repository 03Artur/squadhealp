import {ROLE, ACTION} from '../../../constants';


export class Rule {
    /**
     *
     * @param {Array.<ROLE>} canActRoles
     * @param canActOwner
     */
    constructor(canActRoles, canActOwner = true) {

        this.canActRoles = canActRoles;
        this.canActOwner = canActOwner;
    }

    /**
     *
     * @param {ROLE} role
     * @param {boolean} isOwner
     * @returns {boolean|*}
     */

    checkPermission(role, isOwner = false) {
        if (isOwner) {
            return this.canActOwner;

        } else {
            return this.canActRoles.includes(role);
        }
    }
}


/*export class CrudRule {
    constructor(createRule, readRule, updateRule, deleteRule) {
        this.rule = new Map([
            [ACTION.CREATE, createRule],
            [ACTION.READ, readRule],
            [ACTION.UPDATE, updateRule],
            [ACTION.DELETE, deleteRule],
        ])
    }

    checkPermission(action, role, isOwner = false) {
        const actionRule = this.rule.get(action);
        if (actionRule) {
            return actionRule.checkPermission(role, isOwner)
        }
        return undefined;
    }
}*/
