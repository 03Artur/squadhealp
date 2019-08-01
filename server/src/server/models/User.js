import {ROLE} from "../constants";


module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            },
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validation: {
                notEmpty: true,
            },
        },
        profilePicture: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        role: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 0,
            validate: {
                isIn: [Object.values(ROLE)],
            },
        },
        balance: {
            type: DataTypes.REAL,
            allowNull: false,
            defaultValue: 0,
            validate: {
                min: 0,
            }
        },
        isBanned: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
    });


    User.associate = function (models) {
        User.hasMany(models.Entry, {foreignKey: 'userId', targetKey: 'id'});
        User.hasMany(models.BusinessInfo, {foreignKey: 'userId', targetKey: 'id'});
        User.hasMany(models.RefreshToken, {foreignKey: 'userId', targetKey: 'id'});

    };
    return User;
};
