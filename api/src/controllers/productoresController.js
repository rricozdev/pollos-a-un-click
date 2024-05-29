const { User } = require("../db");

//Get/productores - obteniendo el role de 'Productor' de la db
const getProductoresDisponibles = async () => {
  // Consultar en la base de datos todos los usuarios que tengan el rol de "Productor"
  const productoresDb = await User.findAll({where: {role: 'productor'}});

  console.log(productoresDb);
  // Verificar si se encontraron productores
  if (productoresDb.length === 0) {
    return "No se encontraron productores disponibles.";
  }

  // Devolver la lista de productores disponibles
  return productoresDb;
};

module.exports = {
  getProductoresDisponibles,
};

