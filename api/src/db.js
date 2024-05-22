require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

//const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname') // Example for postgres
const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

// Inyectamos la conexión (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { User, Produccion, Pedido, Mensaje } = sequelize.models;

//relaciones ejemplo:
// User.hasMany(Business);

User.hasMany(Produccion); // Un usuario puede tener muchas producciones
Produccion.belongsTo(User); // Una producción pertenece a un usuario

User.hasMany(Pedido); // Un usuario puede realizar muchos pedidos
Pedido.belongsTo(User); // Un pedido pertenece a un usuario

User.hasMany(Mensaje, { as: 'remitente' }); // Un usuario puede enviar muchos mensajes
User.hasMany(Mensaje, { as: 'destinatario' }); // Un usuario puede recibir muchos mensajes
Mensaje.belongsTo(User, { as: 'remitente' }); // Un mensaje pertenece a un remitente
Mensaje.belongsTo(User, { as: 'destinatario' }); // Un mensaje pertenece a un destinatario



module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};