'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.addConstraint('FavoriteTasks', ['userId', 'taskId'], {
                type: 'unique',
                name: 'FavoriteTasks_userId_taskId_uq'
            }
        );
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('FavoriteTasks');
    }
};
