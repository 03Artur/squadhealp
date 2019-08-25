'use strict';



module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.addConstraint('Tasks', ['contestId','type'], {
            type: 'unique',
            name: 'uq_combine_contestId_type',
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.removeConstraint(
            'Tasks', // name of Source model
            'uq_combine_contestId_type' // key we want to remove
        );
    }
};
