import {CONTEST_ACTION_RULES} from "../constants";

const Rule = require('../utils/permissions/classes/Rule');
const ActionRules = require('../utils/permissions/classes/ActionRules');
const {ROLE, ACTION} = require("../constants");

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
    Contests.actionRules = CONTEST_ACTION_RULES;


    Contests.checkPermission = (action, actor, contest) => {
        return Contests.actionRules.checkPermission(action, actor.role, actor.id === contest.userId)
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



