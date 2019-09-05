const {ENTRY_ACTION_RULES} = require('../constants');

module.exports = (sequelize, DataTypes) => {
    const FavoriteTasks = sequelize.define('FavoriteTasks', {
        userId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Users',
                key: 'id'
            },
            allowNull: false,
        },
        taskId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Tasks',
                key: 'id'
            },
            allowNull: false,
        },
    });


    FavoriteTasks.associate = function (models) {
        FavoriteTasks.belongsTo(models.Tasks, {foreignKey: 'taskId', targetKey: 'id'});
        FavoriteTasks.belongsTo(models.Users, {foreignKey: 'userId', targetKey: 'id'});
    };
    return FavoriteTasks;
};
