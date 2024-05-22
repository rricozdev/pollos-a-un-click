const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Mensaje', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        contenido: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        remitenteId: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        destinatarioId: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        fechaEnvio: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        leido: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        }
    });
};


/*En este modelo:

id: Es el identificador único de cada mensaje y se utiliza como clave primaria.
contenido: Es el contenido del mensaje.
remitenteId: Es la clave foránea que identifica al usuario que envía el mensaje.
destinatarioId: Es la clave foránea que identifica al usuario que recibe el mensaje.
fechaEnvio: Es la fecha y hora en que se envió el mensaje.
leido: Es un campo booleano que indica si el mensaje ha sido leído por el destinatario.
Con este modelo, podrás registrar y gestionar los mensajes enviados entre productores y tenderos en tu plataforma, manteniendo un registro de las conversaciones y el estado de lectura de cada mensaje.
 */