'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Contests', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },

            userId: {
                type: Sequelize.INTEGER,
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE',
                references: {
                    model: 'Users',
                    key: 'id'
                },
                allowNull: false,
            },
            name: {
                type: Sequelize.STRING,
                allowNull: true,
                validate: {
                    notEmpty: true,
                },
            },
            type: {
                type: Sequelize.STRING,
                allowNull: true,
                validate: {
                    isIn: ["Company", "Product", 'Project']
                },

            },
            typeOfIndustry: {
                type: Sequelize.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true,
                },
            },
            targetCustomers: {
                type: Sequelize.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true,
                },
            },
            description: {
                type: Sequelize.TEXT,
                allowNull: false,
                validate: {
                    notEmpty: true,
                },
            },
            createdAt: Sequelize.DATE,
            updatedAt: Sequelize.DATE,

        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Contests');
    }
};
