const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Produccion', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        fecha: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        cantidad: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        detalles: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        UserId: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });
};
