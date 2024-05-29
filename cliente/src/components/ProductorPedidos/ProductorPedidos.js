// import React from "react";
// import { RiMessage2Line, RiShoppingBasketLine, RiFileList2Line, RiChartLine, RiAddCircleLine, RiTruckLine } from '@remixicon/react';
// import styles from "./ProductorPedidos.module.css";

// const ProductorPedidos = () => {



//   return (
//     <div className={`${styles.container} p-6`}>
//       <h1 className="text-4xl font-bold text-center text-gray-500 mb-6 ">Pollos a un click - Productor</h1>
//       <h2 className="text-2xl font-semibold text-center text-gray-400 mb-8">Panel de administración - Gestionar Pedidos</h2>
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//         <button className={`${styles.button} bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`} >
//           Ver Pedidos
//         </button>
//         <button className={`${styles.button} bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`} >
//           Ver Pedidos
//         </button>
//         <button className={`${styles.button} bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`} >
//           Ver Pedidos
//         </button>
//         <button className={`${styles.button} bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`} >
//           Ver Pedidos
//         </button>
//         <button className={`${styles.button} bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`} >
//           Ver Pedidos
//         </button>
//         <button className={`${styles.button} bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`} >
//           Ver Pedidos
//         </button>
//         <button className={`${styles.button} bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`} >
//           Ver Pedidos
//         </button>
//         <button className={`${styles.button} bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`} >
//           Ver Pedidos
//         </button>
//         {/* Otros botones */}
//       </div>

//     </div>
//   );
// };

// export default ProductorPedidos;

import React from "react";
import {
  RiMessage2Line,
  RiShoppingBasketLine,
  RiLineChartLine,
  RiAddCircleLine,
  RiTruckLine,
  RiMailLine,
} from "react-icons/ri";
import styles from "./ProductorPedidos.module.css";

const ProductorPedidos = () => {
  return (
    <div className={`${styles.container} p-6`}>
      <h1 className="text-4xl font-bold text-center text-gray-500 mb-6 ">
        Pollos a un click - Productor
      </h1>
      <h2 className="text-2xl font-semibold text-center text-gray-400 mb-8">
        Panel de administración - Gestionar Pedidos
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <button
          className={`${styles.button} bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
        >
          <RiMessage2Line className="mr-2" /> Ver Mensajes
        </button>
        <button
          className={`${styles.button} bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
        >
          <RiShoppingBasketLine className="mr-2" /> Ver Inventario
        </button>
        <button
          className={`${styles.button} bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
        >
          <RiLineChartLine className="mr-2" /> Ver Estadísticas
        </button>
        <button
          className={`${styles.button} bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
        >
          <RiAddCircleLine className="mr-2" /> Agregar Producto
        </button>
        <button
          className={`${styles.button} bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
        >
          <RiTruckLine className="mr-2" /> Gestionar Envíos
        </button>
      </div>
      <div className="card">
        <h2 className="cardTitle">
          <RiMailLine className="mr-2" /> Mensajes
        </h2>
        {/* Aquí puedes mostrar los mensajes */}
        <p>Hola estoy interesado en comprar por lotes...</p>
      </div>
    </div>
  );
};

export default ProductorPedidos;
