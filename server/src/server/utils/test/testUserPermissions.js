const {Users, Contests} = require('../../models');
const {ROLE} = require("../../constants");


const userActor = {
    id: 1,
    role: ROLE.ADMIN,
};
const userObject = {
    id: 2,
    role: ROLE.ADMIN,
};

const businessInfoObject = {
    id: undefined,
};


console.log("can ADMIN create ADMIN: ", Users.checkPermission("POST", userActor, userObject));
console.log("can ADMIN create Contest: ", Contests.checkPermission("POST", userActor, businessInfoObject));






