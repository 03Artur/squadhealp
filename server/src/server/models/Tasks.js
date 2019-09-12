'use strict';


import {ENTRY_ACTION_RULES} from "../constants";

module.exports = (sequelize, DataTypes) => {
    const Tasks = sequelize.define('Tasks', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        chatId: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        style: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isIn: [["Name", "Tagline", 'Logo']]
            }
        },
        priority: {
            type: DataTypes.INTEGER,
            allowNull: false,

        },
        files: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: true,

        },
        cost: {
            type: DataTypes.REAL,
            allowNull: false,
            validate: {
                min: 0,
            },
        },

    });
    Tasks.associate = function (models) {
        Tasks.hasMany(models.Entries, {foreignKey: 'taskId', targetKey: 'id', as: 'entries'});
        Tasks.hasMany(models.FavoriteTasks, {foreignKey: 'taskId', targetKey: 'id', as: 'likes'});
        Tasks.belongsToMany(models.Users, {through: models.FavoriteTasks, foreignKey: 'taskId', as: 'fans'});
        Tasks.belongsTo(models.Contests, {foreignKey: 'contestId', targetKey: 'id', as: 'contest'});
        Tasks.belongsTo(models.Entries, {foreignKey: 'winnerId', targetKey: 'id',as: 'winningEntry'});

    };


    return Tasks;
};
    
