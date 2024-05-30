const { 
    getPedidos, 
    getPedidoById, 
    createPedido,
    updatePedido
} = require('../controllers/pedidosController')
// Get/pedidos - obtener los pedidos de un productor en especifico, usando su `productoId`
// const getPedidosHandler = async (req, res) => {
    
//     try {
//         const result = await getPedidos();
//         res.status(200).json(result);
//     } catch (error) {
//         res.status(400).json({error:error.message});
//     }
// };
const getPedidosHandler = async (req, res) => {
    const productorId = req.query.productorId; // Obtener el productorId de los parámetros de la consulta
    try {
      const result = await getPedidos(productorId);
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };


// Get/pedidos/{:id} - obtener pedidos por id del controller
const getPedidoByIdHandler = async (req, res) => {
    const { id } = req.params;
    try {
        const pedido = await getPedidoById(id);
        res.status(200).json(pedido);
    } catch (error) {
        res.status(400).json({error:error.message});
    }
};


// Post/pedidos - crear un pedido solicitando al controller
const createPedidoHandler = async (req, res) => {
    try {
        const { cantidad, tenderoId, productorId } = req.body;
        const nuevoPedido = await createPedido(cantidad, tenderoId, productorId);

        res.status(201).json(nuevoPedido);
    } catch (error) {
        res.status(400).json({ error: `Error en el handler: ${error.message}` });
    }
};


// Put/pedidos - cancelar un pedido o actualizarlo
const updatePedidoHandler = async (req, res) => {
    try {
        const { id } = req.params;

        const { cantidad, estado, detalles } = req.body;

        // Verificar si se proporcionó al menos un campo para actualizar
    if (!cantidad && !estado && !detalles) {
        throw new Error("Debe proporcionar al menos un campo para actualizar.");
      }

      // Llama a la función updatePedido del controlador, que interactúa con la base de datos y el modelo
    const updatedPedido = await updatePedido(
        id, // Utiliza el id del usuario obtenido de los parámetros de la ruta
        cantidad,      
        estado,
        detalles,
      );
  
      res.status(200).json(updatedPedido);
        
    } catch (error) {
        res.status(400).json({error:error.message});
    }
};

module.exports = {
    getPedidosHandler,
    getPedidoByIdHandler,
    createPedidoHandler,
    updatePedidoHandler
}