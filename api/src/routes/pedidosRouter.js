// Rutas
const { Router } = require('express');
const {
    getPedidosHandler,
    getPedidoByIdHandler,
    createPedidoHandler,
    updatePedidoHandler
} = require('../handlers/pedidosHandler');


const pedidosRouter = Router();

// Get-users
pedidosRouter.get('/', getPedidosHandler);


// Get/users/:identification - params
pedidosRouter.get('/:id', getPedidoByIdHandler);


// Post -users
pedidosRouter.post('/', createPedidoHandler);

// Put
pedidosRouter.put('/:id', updatePedidoHandler);



module.exports = pedidosRouter;

