const {User, Contest} = require('../../models');
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


console.log("can ADMIN create ADMIN: ", User.checkPermission("POST", userActor, userObject));
console.log("can ADMIN create Contest: ", Contest.checkPermission("POST", userActor, businessInfoObject));






