'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Contest', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },

            businessInfoId: {
                type: Sequelize.INTEGER,
                onDelete: 'CASCADE',
                onUpdate: "CASCADE",
                references: {
                    model: 'BusinessInfo',
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
            isPaid: {
              type: Sequelize.BOOLEAN,
              allowNull: false,
              defaultValue: false,
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
            isActive: {
                type: Sequelize.BOOLEAN,
                defaultValue: false,
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
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.NOW
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Contest');
    }
};
