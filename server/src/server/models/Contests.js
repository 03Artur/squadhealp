const Rule = require('../utils/permissions/classes/Rule');
const ActionRules = require('../utils/permissions/classes/ActionRules');
const {ROLES, ACTION, CONTEST_ACTION_RULES} = require("../constants");

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
        nameOf: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                isIn: [["Company", "Product", 'Project']]
            },

        },
        isPaid: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
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

    Contests.associate = function (models) {
        Contests.hasMany(
            models.Tasks,
            {
                foreignKey: 'contestId',
                targetKey: 'id',
                as: 'tasks',
            }
        );
        Contests.belongsTo(
            models.Users,
            {
                foreignKey: 'userId',
                targetKey: 'id',
                as: 'user',
            }
        )
    };

    Contests.actionRules = CONTEST_ACTION_RULES;


    Contests.checkPermission = (action, actor, contest) => {
        return Contests.actionRules.checkPermission(action, actor.role, actor.id == contest.userId)
    };

    Contests.prototype.checkPermission = (action, actor) => {
        return Contests.checkPermission(action, actor, this)
    };

    return Contests;
};



