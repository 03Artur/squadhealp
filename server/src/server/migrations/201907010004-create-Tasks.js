'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Tasks',
            {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },

            contestId: {
                type: Sequelize.INTEGER,
                onDelete: 'CASCADE',
                onUpdate: "CASCADE",
                references: {
                    model: 'Contests',
                    key: 'id'
                },
                allowNull: false,
            },
            title: {
                type: Sequelize.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true,
                },

            },
            style: {
                type: Sequelize.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true,
                },
            },
            type: {
                type: Sequelize.STRING,
                allowNull: false,
                validate: {
                    isIn: ["Name", "Tagline", 'Logo'],
                },
            },
            priority: {
                type: Sequelize.INTEGER,
                allowNull: false,

            },
            files: {
                type: Sequelize.ARRAY(Sequelize.STRING),
                allowNull: true,

            },
            cost: {
                type: Sequelize.REAL,
                allowNull: false,
                validate: {
                    min: 0,
                }

            },
            createdAt: Sequelize.DATE,
            updatedAt: Sequelize.DATE,
        }
        );
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Tasks');
    }
};
