const {ENTRY_ACTION_RULES} = require('../constants');

module.exports = (sequelize, DataTypes) => {
    const FavoriteTasks = sequelize.define('FavoriteTasks', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
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
    },{
        timestamps:true
    });



    return FavoriteTasks;
};
