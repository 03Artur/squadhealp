'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Entries', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            userId:{
                type: Sequelize.INTEGER,
                onDelete: 'SET NULL',
                onUpdate: 'CASCADE',
                references: {
                    model: 'Users',
                    key: 'id'
                },
                allowNull: false,
            },
            taskId: {

                type: Sequelize.INTEGER,
                onDelete: 'CASCADE',
                onUpdate: "CASCADE",
                references: {
                    model: 'Tasks',
                    key: 'id'
                },
                allowNull: false,

            },
            files: {
                type: Sequelize.ARRAY(Sequelize.STRING),
                allowNull: true,

            },
            createdAt: Sequelize.DATE,
            updatedAt:Sequelize.DATE,

        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Entries');
    }
};
