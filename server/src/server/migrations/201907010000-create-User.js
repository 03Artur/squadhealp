'use strict';
const ROLE= {
    BUYER: "BUYER",
        CREATIVE: "CREATIVE",
        ADMIN: "ADMIN",
};
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('User', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            firstName: {
                type: Sequelize.STRING,
                allowNull: false
            },
            lastName: {
                type: Sequelize.STRING,
                allowNull: false
            },
            email: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true,
                validate: {
                    isEmail: true
                }
            },
            password: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            profilePicture: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            role: {
                type: Sequelize.STRING,
                allowNull: false,
                defaultValue: ROLE.BUYER,
                validate: {
                    allowNull: false,
                    isIn: [Object.values(ROLE)],
                }
            },
            balance: {
                type: Sequelize.REAL,
                allowNull: false,
                defaultValue: 0,
                validate: {
                    min: 0,
                }
            },
            isBanned: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: false,
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
        return queryInterface.dropTable('User');
    }
};
