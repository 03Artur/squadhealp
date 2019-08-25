'use strict'

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Tasks', [
            {
                contestId: 1,
                title: "Test task title",
                style: 'Fan',
                type: "Logo",
                priority: 2,
                cost: 200.32,
                isActive: false,
            },
            {
                contestId: 1,
                title: "Test task title",
                style: 'Fan',
                type: "Tagline",
                priority: 1,
                cost: 200.32,
                isActive: false,
            },{
                contestId: 2,
                title: "Test task title",
                style: 'Fan',
                type: "Logo",
                priority: 2,
                cost: 200.32,
                isActive: false,
            },
            {
                contestId: 2,
                title: "Test task title",
                style: 'Fan',
                type: "Tagline",
                priority: 1,
                cost: 200.32,
                isActive: false,
            },{
                contestId: 3,
                title: "Test task title",
                style: 'Fan',
                type: "Tagline",
                priority: 1,
                cost: 200.32,
                isActive: false,
            },

        ], {});
    },

    down: (queryInterface, Sequelize) => {
    },
};
