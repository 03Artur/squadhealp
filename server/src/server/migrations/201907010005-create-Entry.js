'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Entry', {
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
                    model: 'User',
                    key: 'id'
                },
                allowNull: false,
            },
            contestId: {

                type: Sequelize.INTEGER,
                onDelete: 'CASCADE',
                onUpdate: "CASCADE",
                references: {
                    model: 'Contest',
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
        return queryInterface.dropTable('Entry');
    }
};
