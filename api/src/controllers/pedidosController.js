const { Pedido } = require("../db");

// Get/pedidos - obtener el listado de pedidos de un productor en especifico
// const getPedidos = async () => {
//   const pedidosDb = await Pedido.findAll();

//   return pedidosDb.length !== 0
//     ? pedidosDb
//     : "No hay pedidos creados en la db...";
// };

// const getPedidos = async (productorId) => {
//   try {
//     const pedidosDb = await Pedido.findAll({
//       where: {
//         productorId: productorId
//       }
//     });

//     return pedidosDb.length !== 0
//       ? pedidosDb
//       : "No hay pedidos creados en la db para este productor...";
//   } catch (error) {
//     throw new Error(`Error al obtener los pedidos del Productor: ${error.message}`);
//   }
// };

const getPedidos = async (productorId) => {
  try {
    const pedidosDb = await Pedido.findAll({
      where: {
        productorId: productorId
      }
    });

    // Formatear la fecha de cada pedido y devolver solo los datos necesarios
    const pedidosFormateados = pedidosDb.map((pedido) => {
      // Convertir la fecha de string a objeto Date
      const fecha = new Date(pedido.fecha);
      // Formatear la fecha como "dd/mm/yyyy hh:mm:ss"
      const fechaFormateada = `${fecha.getDate()}/${fecha.getMonth() + 1}/${fecha.getFullYear()} ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`;

      // Devolver solo los datos necesarios del pedido con la fecha formateada
      return {
        id: pedido.id,
        fecha: fechaFormateada,
        cantidad: pedido.cantidad,
        estado: pedido.estado,
        detalles: pedido.detalles,
        tenderoId: pedido.tenderoId,
        productorId: pedido.productorId,
        createdAt: pedido.createdAt,
        updatedAt: pedido.updatedAt
      };
    });

    return pedidosFormateados.length !== 0
      ? pedidosFormateados
      : "No hay pedidos creados en la db para este productor...";
  } catch (error) {
    throw new Error(`Error al obtener los pedidos del Productor: ${error.message}`);
  }
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
