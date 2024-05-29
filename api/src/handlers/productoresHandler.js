const  {getProductoresDisponibles}  = require('../controllers/productoresController');




// Get/productores - obtener user Productor de controller
const getProductoresDisponiblesHandler = async (req, res) => {
    try {
      const productores = await getProductoresDisponibles();
      console.log(`Esto es ${productores}`);
      res.status(200).json(productores);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };


  module.exports = getProductoresDisponiblesHandler;


  