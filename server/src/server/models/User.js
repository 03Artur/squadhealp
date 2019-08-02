const {ROLE, ACTION} = require("../constants");
const Rule = require('../utils/permission_CRUD/classes/Rule');
const CrudRule = require('../utils/permission_CRUD/classes/CrudRule');

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
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
                isIn: [Object.values(ROLE)],
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
    const allRolesArr = Object.values(ROLE);

    User.crudRule = new Map([

        [ROLE.ADMIN, new CrudRule(
            new Rule(allRolesArr),
            new Rule(allRolesArr, true),
            new Rule(allRolesArr, true),
            new Rule([ROLE.CREATIVE, ROLE.BUYER], false),
        )],

        [ROLE.BUYER, new CrudRule(
            new Rule([]),
            new Rule([ROLE.CREATIVE, ROLE.BUYER], true),
            new Rule([], true),
            new Rule([], true))],

        [ROLE.CREATIVE, new CrudRule(
            new Rule([]),
            new Rule([ROLE.CREATIVE, ROLE.BUYER], true),
            new Rule([], true),
            new Rule([], true)),],
    ]);
    /**
     *
     * @param action
     * @param actor
     * @param object
     * @returns {*}
     */
    User.checkPermission = (action, actor, object) => {
        console.log(actor);
        const crudRule = User.crudRule.get(actor.role);
        if (crudRule) {
            return crudRule.checkPermission(action, object.role, actor.id === object.id);
        }
        return undefined;
    };

    /**
     *
     * @param action
     * @param object
     * @returns {*}
     */
    User.prototype.checkPermission = function(action, object) {

        console.log(this);

        return User.checkPermission(action, this, object);

    };

    User.associate = function (models) {
        User.hasMany(models.Entry, {foreignKey: 'userId', targetKey: 'id'});
        User.hasMany(models.Contest, {foreignKey: 'userId', targetKey: 'id'});
        User.hasMany(models.RefreshToken, {foreignKey: 'userId', targetKey: 'id'});

    };
    return User;
};
