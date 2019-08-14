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
            }
        },
        isActive: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: false,
        }

    });
    Tasks.associate = function (models) {
        Tasks.hasMany(
            models.Entries,
            {
                foreignKey: 'taskId',
                targetKey: 'id',
            }
        );
        Tasks.belongsTo(
            models.Contests,
            {
                foreignKey: 'contestId',
                targetKey: 'id',
            }
        );
        Tasks.belongsTo(
            models.Entries,
            {
                foreignKey: 'winnerId',
                targetKey: 'id',
            }
        )
    };


    return Tasks;
};
    
