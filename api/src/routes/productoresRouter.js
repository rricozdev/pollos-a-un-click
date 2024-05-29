const { Router } = require('express');
// const getProductoresDisponiblesHandler = require('../handlers/productoresHandler')
const getProductoresDisponiblesHandler = require('../handlers/productoresHandler');


const productoresRouter = Router();


// Obtener los productores disponibles
productoresRouter.get('/', getProductoresDisponiblesHandler);


module.exports = productoresRouter;