const Rule = require('./Rule');
const {ACTION} = require("../../../constants/index");


module.exports = class CrudRule {

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

};


