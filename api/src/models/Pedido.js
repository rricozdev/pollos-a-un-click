const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Pedido', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        fecha: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        cantidad: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        estado: {
            type: DataTypes.ENUM('pendiente', 'confirmado', 'entregado'),
            allowNull: false,
            defaultValue: 'pendiente',
        },
        detalles: {
            type: DataTypes.ENUM('pendiente', 'confirmado', 'entregado'),
            allowNull: false,
            defaultValue: 'pendiente',
        },
        tenderoId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Users',
                key: 'id',
            }
        },
        productorId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Users',
                key: 'id',
            }
        }
    });
};
