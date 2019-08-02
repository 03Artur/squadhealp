const Rule = require('../utils/permission_CRUD/classes/Rule');
const CrudRule = require('../utils/permission_CRUD/classes/CrudRule');
const {ROLE} = require("../constants");

module.exports = (sequelize, DataTypes) => {
    const Contests = sequelize.define('Contests', {
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
    Contests.crudRules = new CrudRule(
        new Rule([ ROLE.ADMIN,ROLE.BUYER], true),
        new Rule([ ROLE.ADMIN,ROLE.BUYER, ROLE.CREATIVE, ROLE.ADMIN], true),
        new Rule([ ROLE.ADMIN,], true),
        new Rule([ ROLE.ADMIN,], true),
    );


    Contests.checkPermission = (action, actor, contest) => {
        return Contests.crudRules.checkPermission(action, actor.role, actor.id === contest.userId)
    };

    Contests.prototype.checkPermission = (action, actor) => {
        return Contests.checkPermission(action, actor, this)
    };

    Contests.associate = function (models) {
        Contests.hasMany(
            models.Tasks,
            {
                foreignKey: 'contestId',
                targetKey: 'id',
            }
        );
        Contests.belongsTo(
            models.Users,
            {
                foreignKey: 'userId',
                targetKey: 'id',
            }
        )
    };

    return Contests;
};



