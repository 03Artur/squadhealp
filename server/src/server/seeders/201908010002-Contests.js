'use strict'

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Contests', [
            {
                userId: 1,
                name: "Test contest name",
                type: "Project",
                typeOfIndustry: "test type of industry",
                targetCustomers: "test target customers",
                description: "test description",
                isPaid: false,
            },
            {
                userId: 1,
                name: "Test contest name",
                type: "Project",
                typeOfIndustry: "test type of industry",
                targetCustomers: "test target customers",
                description: "test description",
                isPaid: false,
            },{
                userId: 1,
                name: "Test contest name",
                type: "Project",
                typeOfIndustry: "test type of industry",
                targetCustomers: "test target customers",
                description: "test description",
                isPaid: false,
            },

        ], {});
    },

    down: (queryInterface, Sequelize) => {
    },
};
