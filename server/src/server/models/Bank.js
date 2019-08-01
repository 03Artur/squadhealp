module.exports = (sequelize, DataTypes) => {
     return sequelize.define('Bank', {

        number: {
            primaryKey: true,
            type: DataTypes.STRING,
            unique: true,
            validate: {
                is: ["^[0-9]{16}$"]
            }

        },
        expiry: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                is: ["^[0-1][0-9]\/[0-9]{2}$"],
            },
        },
        cvc: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                is: ["^[0-9]{3}$"],
            },

        },
        balance: {
            type: DataTypes.REAL,
        },


    });

};
