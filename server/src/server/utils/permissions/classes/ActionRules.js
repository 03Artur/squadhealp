

module.exports = class ActionRules {

    constructor(actionRules = []) {

        this.rules = new Map(actionRules);
    }

    addRule(action, rule) {
        this.rules.set(action, rule);
        return this;
    }

    checkPermission(action, role, isOwner = false) {
        const rule = this.rules.get(action);
        if (rule) {
            return rule.checkPermission(role, isOwner);
        }
        return null;
    }
};





