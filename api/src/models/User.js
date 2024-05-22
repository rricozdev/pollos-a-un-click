const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('User', {
        id: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
            unique: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        surnames: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        userType: {
            type: DataTypes.ENUM('productor', 'tendero'),
            allowNull: false,
        },
        deleted: {
            type: DataTypes.BOOLEAN,
            defaultValue: false // Por defecto, un usuario no está marcado como eliminado
        }

    });
};