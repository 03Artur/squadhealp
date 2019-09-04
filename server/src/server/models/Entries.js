const {ENTRY_ACTION_RULES} = require('../constants');

module.exports = (sequelize, DataTypes) => {
    const Entries = sequelize.define('Entries', {
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
        isRejected: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        files: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: true,
        },
    });

    Entries.actionRules = ENTRY_ACTION_RULES;

    Entries.checkPermission = (action, actor, entry) => {
        return Entries.actionRules.checkPermission(action, actor.role, actor.id == entry.userId)
    };

    Entries.prototype.checkPermission = (action, actor) => {
        return Entries.checkPermission(action, actor, this)
    };

    Entries.associate = function (models) {
        Entries.belongsTo(models.Tasks, {foreignKey: 'taskId', targetKey: 'id'});
        Entries.belongsTo(models.Users, {foreignKey: 'userId', targetKey: 'id'});
    };
    return Entries;
};
