'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.addColumn(
            'Tasks', // name of Source model
            'winnerId', // name of the key we're adding
            {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Entries',
                    key: 'id'
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
            }
        );
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.removeColumn(
            'Tasks', // name of Source model
            'winnerId' // key we want to remove
        );
    }
};
