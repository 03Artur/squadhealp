'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Bank', {

            number: {
                primaryKey: true,
                type: Sequelize.STRING,
                unique: true,
                validate: {
                    is: ["^[0-9]{16}$"]
                }

            },
            expiry:{
                type: Sequelize.STRING,
                allowNull: false,
                validate:{
                    is:["^[0-1][0-9]\/[0-9]{2}$"],
                },
            },
            cvc:{
                type:Sequelize.STRING,
                allowNull:false,
                validate: {
                    is:["^[0-9]{3}$"],
                },

            },
            balance: {
                type: Sequelize.REAL,
                defaultValue: 1000000,
            },
            createdAt: Sequelize.DATE,
            updatedAt:Sequelize.DATE,

        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Bank');
    }
};
