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
                isPaid: true,
            },
            {
                userId: 1,
                name: "Test contest name",
                type: "Tagline",
                typeOfIndustry: "test type of industry",
                targetCustomers: "test target customers",
                description: "test description",
                isPaid: true,
            },{
                userId: 1,
                name: "Test contest name",
                type: "Project",
                typeOfIndustry: "test type of industry",
                targetCustomers: "test target customers",
                description: "test description",
                isPaid: true,
            },{
                userId: 2,
                typeOfIndustry: "test type of industry",
                targetCustomers: "test target customers",
                description: "test description",
                isPaid: true,
            },{
                userId: 2,
                name: "Contest of the dream",
                type: "Logo",
                typeOfIndustry: "test type of industry",
                targetCustomers: "test target customers",
                description: "test description",
                isPaid: true,
            },

        ], {});
    },

    down: (queryInterface, Sequelize) => {
    },
};
