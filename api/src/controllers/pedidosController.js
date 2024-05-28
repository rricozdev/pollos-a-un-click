const { Pedido } = require("../db");

// Get/pedidos - obtener el listado de todos los pedidos
const getPedidos = async () => {
  const pedidosDb = await Pedido.findAll();

  return pedidosDb.length !== 0
    ? pedidosDb
    : "No hay pedidos creados en la db...";
};

// Get/pedidos/{:id} - obtener pedidos por id de la db
const getPedidoById = async (id) => {
  const pedido = await Pedido.findOne({
    where: { id },
  });

  if (!pedido) {
    throw new Error(`No se encontró un pedido con el id: ${id}`);
  }

  return pedido;
};



// Post/pedidos - crear un pedido en la db
// const createPedido = async (cantidad, estado, detalles) => {
//     if(!cantidad || !estado || !detalles) {
//         throw new Error("Todos los campos son obligatorios.");
//     }

//     const nuevoPedido = await Pedido.create({
//         cantidad,
//         estado,
//         detalles
//     });

//     return nuevoPedido;
// }
// Post/pedidos - crear un pedido en la db
const createPedido = async (cantidad, tenderoId, productorId) => {
    try {
        if (!cantidad) {
            throw new Error("La cantidad es obligatoria para crear un pedido.");
        }

        const nuevoPedido = await Pedido.create({
            cantidad,
            estado: 'pendiente', // Aquí puedes establecer el estado predeterminado si lo deseas
            detalles: 'pendiente', // Aquí puedes establecer los detalles predeterminados si lo deseas
            tenderoId,
            productorId
        });

        return nuevoPedido;
    } catch (error) {
        throw new Error(`Error en el controller: ${error.message}`);
    }
};



const updatePedido = async (id, cantidad, estado, detalles) => {
    const pedido = await Pedido.findOne({
        where: {id}
    });

    if(!pedido) {
        throw new Error("Pedido no encontrado.");
    }

    // Actualiza solo los campos proporcionados, si existen
    if (cantidad) pedido.cantidad = cantidad;
    if (estado) pedido.estado = estado;
    if (detalles) pedido.detalles = detalles;

    await pedido.save(); // Guarda los cambios en la base de datos

    return pedido; 
}


module.exports = {
  getPedidos,
  getPedidoById,
  createPedido,
  updatePedido
};
