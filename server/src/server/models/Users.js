const {ROLE, ACTION} = require("../constants");
const Rule = require('../utils/permission_CRUD/classes/Rule');
const CrudRule = require('../utils/permission_CRUD/classes/CrudRule');

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
    const buyerRules =new CrudRule(
        new Rule([]),
        new Rule([ROLE.CREATIVE, ROLE.BUYER], true),
        new Rule([], true),
        new Rule([], true));


    buyerRules.addRule(ACTION.BAN,new Rule([ROLE.CREATIVE],false));

    Users.crudRule = new Map([

        [ROLE.ADMIN, new CrudRule(
            new Rule(allRolesArr),
            new Rule(allRolesArr, true),
            new Rule([ROLE.BUYER,ROLE.CREATIVE], false),
            new Rule([ROLE.CREATIVE, ROLE.BUYER], false),
        )],

        [ROLE.BUYER,buyerRules ],

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
    Users.checkPermission = (action, actor, object) => {
        const crudRule = Users.crudRule.get(actor.role);
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
    Users.prototype.checkPermission = function(action, object) {


        return Users.checkPermission(action, this, object);

    };

    Users.associate = async function (models) {
        await Users.hasMany(models.Entries, {foreignKey: 'userId', targetKey: 'id'});
        await Users.hasMany(models.RefreshTokens, {foreignKey: 'userId', targetKey: 'id'});
        await Users.hasMany(models.Contests, {foreignKey: 'userId', targetKey: 'id'});

    };
    return Users;
};
