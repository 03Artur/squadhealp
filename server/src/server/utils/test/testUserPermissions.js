const {Users, Contests} = require('../../models');
const {ROLES} = require("../../constants");


const userActor = {
    id: 1,
    role: ROLES.ADMIN,
};
const userObject = {
    id: 2,
    role: ROLES.ADMIN,
};

const businessInfoObject = {
    id: undefined,
};


console.log("can ADMIN create ADMIN: ", Users.canIAct("POST", userActor, userObject));
console.log("can ADMIN create Contest: ", Contests.canIAct("POST", userActor, businessInfoObject));






