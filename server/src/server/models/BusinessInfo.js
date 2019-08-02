const Rule = require('../utils/permission_CRUD/classes/Rule');
const CrudRule = require('../utils/permission_CRUD/classes/CrudRule');
const {ROLE} = require("../constants");

module.exports = (sequelize, DataTypes) => {
    const Contest = sequelize.define('Contest', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },

        name: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                notEmpty: true,
            },
        },
        type: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                isIn: ["Company", "Product", 'Project']
            },

        },
        typeOfIndustry: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        targetCustomers: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },

    });

    Contest.crudRules = new CrudRule(
        new Rule([ROLE.BUYER], true),
        new Rule([ROLE.BUYER, ROLE.CREATIVE, ROLE.ADMIN], true),
        new Rule([], true),
        new Rule([], true),
    );

    Contest.checkPermission = (action, actor, businessInfo) => {
        return Contest.crudRules.checkPermission(action, actor.role, actor.id === businessInfo.userId)
    };

    Contest.prototype.checkPermission = (action, actor) => {
        return Contest.checkPermission(action, actor, this)
    };

    Contest.associate = function (models) {
        Contest.hasMany(
            models.ContestTask,
            {
                foreignKey: 'ContestId',
                targetKey: 'id',
            }
        )
    };

    return Contest;
};



