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
        UserId: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });
};

/*En este modelo:

1. id: Es el identificador único de cada pedido, y se utiliza como clave primaria.
2. fecha: Representa la fecha en que se realizó el pedido de pollos.
3. cantidad: Indica la cantidad de pollos solicitados en el pedido.
4. estado: Define el estado actual del pedido, con valores posibles de 'pendiente', 'confirmado' o 'entregado'.
5. UserId: Es una clave foránea que vincula el pedido con el usuario que lo realizó, lo que permite asociar cada pedido con un tendero específico.

Con este modelo, podrás registrar y gestionar los pedidos de pollos realizados por los tenderos en la plataforma, manteniendo un seguimiento del estado de cada pedido. */