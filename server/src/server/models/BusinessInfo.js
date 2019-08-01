module.exports = (sequelize, DataTypes) => {
    const BusinessInfo = sequelize.define('BusinessInfo', {
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
    BusinessInfo.associate = function (models) {
        BusinessInfo.hasMany(

            models.Contest,
            {
                foreignKey: 'BusinessInfoId',
                targetKey: 'id',
            }
        )
    };

    return BusinessInfo;
};



