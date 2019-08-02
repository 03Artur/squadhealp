module.exports = (sequelize, DataTypes) => {
    const Entries = sequelize.define('Entries', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        files: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: true,
        },
    });
    Entries.associate = function (models) {
        Entries.belongsTo(models.Tasks, {foreignKey: 'taskId', targetKey: 'id'});
        Entries.belongsTo(models.Users, {foreignKey: 'userId', targetKey: 'id'});
    };
    return Entries;
};
