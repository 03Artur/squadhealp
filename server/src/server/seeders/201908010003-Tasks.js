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
                
            },
            {
                contestId: 1,
                title: "Test task title",
                style: 'Fan',
                type: "Tagline",
                priority: 1,
                cost: 200.32,
                
            },{
                contestId: 2,
                title: "Test task title",
                style: 'Fan',
                type: "Logo",
                priority: 2,
                cost: 200.32,
                
            },
            {
                contestId: 2,
                title: "Test task title",
                style: 'Fan',
                type: "Tagline",
                priority: 1,
                cost: 200.32,
                
            },{
                contestId: 3,
                title: "Test task title",
                style: 'Fan',
                type: "Tagline",
                priority: 1,
                cost: 200.32,
                
            },

        ], {});
    },

    down: (queryInterface, Sequelize) => {
    },
};
