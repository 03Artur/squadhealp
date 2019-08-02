import Rule from './Rule';
import {ACTION} from "../../../constants";


module.exports =  class CrudRule {

    /**
     *
     * @param {Rule} createRule
     * @param {Rule} readRule
     * @param {Rule} updateRule
     * @param {Rule} deleteRule
     */
    constructor(createRule, readRule, updateRule, deleteRule) {

        this.rules = new Map([
            [ACTION.CREATE, createRule],
            [ACTION.READ, readRule],
            [ACTION.UPDATE, updateRule],
            [ACTION.DELETE, deleteRule],
        ])
    }

    checkPermission(action, role, isOwner = false) {
        const rule = this.rules.get(action);
        if (rule) {
            return rule.checkPermission(role, isOwner);
        }
        return undefined
    }

}


export class UserCrudRule extends CrudRule {
    constructor( createRule, readRule, updateRule, deleteRule) {
        super(createRule, readRule, updateRule, deleteRule);

    }
    checkPermission( action, role, isOwner = false) {
        return super.checkPermission(action, role, isOwner);
    }
}

