'use strict';

import {ACTION, ROLE} from "../constants";
import {CrudRule,Rule} from "../utils/permission_CRUD/Rule";

module.exports = (sequelize, DataTypes) => {
    const Contest = sequelize.define('Contest', {
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
                isIn: ["Name", "Tagline", 'Logo']
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
        isPaid: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        cost: {
            type: DataTypes.REAL,
            allowNull: false,
            validate: {
                min: 0,
            }

        },

    });

    Contest.crudRules = new CrudRule(
        new Rule([],)
    )

    Contest.associate = function (models) {
        Contest.belongsTo(models.BusinessInfo, {foreignKey: 'businessInfoId', targetKey: 'id'});
        Contest.hasMany(models.Entry, {foreignKey: 'contestId', targetKey: 'id'});
        Contest.belongsTo(models.Entry, {foreignKey: 'winnerId', targetKey: 'id',});

    };


    return Contest;
};
    
