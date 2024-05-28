const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Notificacion', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        mensaje: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        leido: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Users',
                key: 'id',
            }
        },
        pedidoId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Pedidos',
                key: 'id',
            }
        }
    });
};
