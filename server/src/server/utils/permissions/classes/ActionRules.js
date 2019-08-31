

module.exports = class ActionRules {

    constructor(actionRules = []) {

        this.rules = new Map(actionRules);
    }

    addRule(action, rule) {
        this.rules.set(action, rule);
        return this;
    }
    getRule(action){
        return this.rules.get(action);
    }
    checkPermission(action, role, isOwner = false) {
        const rule = this.rules.get(action);
        if (rule) {
            return rule.checkPermission(role, isOwner);
        }
        return null;
    }
};





