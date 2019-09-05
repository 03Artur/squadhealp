'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.addConstraint('FavoriteContests', ['userId', 'taskId'], {
                type: 'primary key',
            }
        );
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('FavoriteContests');
    }
};
