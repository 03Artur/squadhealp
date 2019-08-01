module.exports = (sequelize, DataTypes) => {
    const Entry = sequelize.define('Entry', {
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
    Entry.associate = function (models) {
        Entry.belongsTo(models.Contest, {foreignKey: 'contestId', targetKey: 'id'});
    };
    return Entry;
};
