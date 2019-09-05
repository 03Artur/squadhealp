import {USERS_ACTION_RULES} from "../constants";

const {ROLES, ACTION} = require("../constants");
const Rule = require('../utils/permissions/classes/Rule');
const ActionRules = require('../utils/permissions/classes/ActionRules');

module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define('Users', {
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
                isIn: [Object.values(ROLES)],
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

    Users.actionRules = USERS_ACTION_RULES;

    Users.checkPermission = (action, actor, object) => {
        const actorRoleActionRules = Users.actionRules.get(actor.role);
        if (actorRoleActionRules) {
            return actorRoleActionRules.checkPermission(action, object.role, actor.id === object.id);
        }
        return null;
    };


    Users.prototype.canActToMe = function (action, actor) {
        return Users.checkPermission(action, actor, this);
    };
    Users.prototype.canIAct = function (action, object) {

        return Users.checkPermission(action, this, object);
    };

    Users.associate = function (models) {
         Users.hasMany(models.Entries, {foreignKey: 'userId', targetKey: 'id'});
         Users.hasMany(models.RefreshTokens, {foreignKey: 'userId', targetKey: 'id'});
         Users.hasMany(models.Contests, {foreignKey: 'userId', targetKey: 'id'});
         Users.belongsToMany(models.Tasks,  {through: models.FavoriteTasks, foreignKey: 'userId', as: 'likedTasks'});

    };
    return Users;
};
