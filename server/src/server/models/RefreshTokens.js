'use strict';

module.exports = (sequelize, DataTypes) => {
    const RefreshTokens = sequelize.define('RefreshTokens', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            onDelete: 'CASCADE',
            references: {
                key: 'id',
                model: 'Users'
            }
        },
        tokenString: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    RefreshTokens.associate = function (models) {
        RefreshTokens.belongsTo(models.Users, {foreignKey: 'userId', sourceKey: 'id'});
    };
    return RefreshTokens;
};
