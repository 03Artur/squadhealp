const Rule = require('../utils/permission_CRUD/classes/Rule');
const CrudRule = require('../utils/permission_CRUD/classes/CrudRule');
const {ROLE} = require("../constants");

module.exports = (sequelize, DataTypes) => {
    const BusinessInfo = sequelize.define('BusinessInfo', {
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

    BusinessInfo.crudRules = new CrudRule(
        new Rule([ROLE.BUYER], true),
        new Rule([ROLE.BUYER, ROLE.CREATIVE, ROLE.ADMIN], true),
        new Rule([], true),
        new Rule([], true),
    );

    BusinessInfo.checkPermission = (action, actor, businessInfo) => {
        return BusinessInfo.crudRules.checkPermission(action, actor.role, actor.id === businessInfo.userId)
    };

    BusinessInfo.prototype.checkPermission = (action, actor) => {
        return BusinessInfo.checkPermission(action, actor, this)
    };

    BusinessInfo.associate = function (models) {
        BusinessInfo.hasMany(
            models.Contest,
            {
                foreignKey: 'BusinessInfoId',
                targetKey: 'id',
            }
        )
    };

    return BusinessInfo;
};



