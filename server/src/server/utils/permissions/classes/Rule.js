const {ROLE, ACTION} = require("../../../constants/index");

module.exports =  class Rule {
    /**
     *
     * @param {Array.<ROLE>} canActRoles
     * @param canOwnerAct
     */
    constructor(canActRoles, canOwnerAct = false) {

        this.canActRoles = canActRoles;
        this.canActOwner = canOwnerAct;
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
};



