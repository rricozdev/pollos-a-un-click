// import React from "react";
// import {
//   RiMessage2Line,
//   RiShoppingBasketLine,
//   RiLineChartLine,
//   RiAddCircleLine,
//   RiTruckLine,
//   RiMailLine,
// } from "react-icons/ri";
// import styles from "./ProductorPedidos.module.css";

// const ProductorPedidos = () => {
//   return (
//     <div className={`${styles.container} p-6`}>
//       <h1 className="text-4xl font-bold text-center text-gray-500 mb-6 ">
//         Pollos a un click - Productor
//       </h1>
//       <h2 className="text-2xl font-semibold text-center text-gray-400 mb-8">
//         Panel de administración - Gestionar Pedidos
//       </h2>
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//         <button
//           className={`${styles.button} bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
//         >
//           <RiShoppingBasketLine className="mr-2" /> Ver Pedidos
//         </button>
//         <button
//           className={`${styles.button} bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
//         >
//           <RiMessage2Line className="mr-2" /> Ver Mensajes
//         </button>
//         <button
//           className={`${styles.button} bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
//         >
//           <RiLineChartLine className="mr-2" /> Ver Estadísticas
//         </button>
//         <button
//           className={`${styles.button} bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
//         >
//           <RiAddCircleLine className="mr-2" /> Agregar Producto
//         </button>
//         <button
//           className={`${styles.button} bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
//         >
//           <RiTruckLine className="mr-2" /> Gestionar Envíos
//         </button>
//       </div>
//       <div className="card py-4">
//         <h2 className="cardTitle">
//           <RiMailLine className="mr-2" /> Mensajes
//         </h2>
//         {/* Aquí puedes mostrar los mensajes */}
//         <p>Hola estoy interesado en comprar por lotes...</p>
//       </div>
//     </div>
//   );
// };

// export default ProductorPedidos;

// Está funcionando todo ok
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import {
//   RiMessage2Line,
//   RiShoppingBasketLine,
//   RiLineChartLine,
//   RiAddCircleLine,
//   RiTruckLine,
//   RiMailLine,
// } from "react-icons/ri";
// import styles from "./ProductorPedidos.module.css";

// const ProductorPedidos = () => {
//   const [showModal, setShowModal] = useState(false);
//   const [pedidos, setPedidos] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const productorId = localStorage.getItem("productorId"); // Obtener el ID del Productor almacenado en localStorage
//   console.log("ID del Productor:", productorId);

//   useEffect(() => {
//     const obtenerPedidos = async () => {
//       if (showModal && productorId) {
//         setLoading(true);
//         try {
//           console.log("Realizando solicitud para obtener pedidos...");
//           const response = await axios.get(`http://localhost:3001/pedidos?productorId=${productorId}`);
//           console.log("Respuesta de la solicitud:", response.data);
//           setPedidos(response.data);
//         } catch (error) {
//           console.error("Error al obtener los pedidos del Productor:", error);
//           setError("Error al obtener los pedidos. Inténtalo de nuevo más tarde.");
//         } finally {
//           setLoading(false);
//         }
//       }
//     };

//     obtenerPedidos();
//   }, [showModal, productorId]);

//   const handleShowModal = () => {
//     setShowModal(true);
//   };

//   const handleCloseModal = () => {
//     setShowModal(false);
//   };

//   return (
//     <div className={`${styles.container} p-6`}>
//       <h1 className="text-4xl font-bold text-center text-gray-500 mb-6 ">
//         Pollos a un click - Productor
//       </h1>
//       <h2 className="text-2xl font-semibold text-center text-gray-400 mb-8">
//         Panel de administración - Gestionar Pedidos
//       </h2>
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//         <button
//           className={`${styles.button} bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
//           onClick={handleShowModal}
//         >
//           <RiShoppingBasketLine className="mr-2" /> Ver Pedidos
//         </button>
//         <button
//           className={`${styles.button} bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
//         >
//           <RiMessage2Line className="mr-2" /> Ver Mensajes
//         </button>
//         <button
//           className={`${styles.button} bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
//         >
//           <RiLineChartLine className="mr-2" /> Ver Estadísticas
//         </button>
//         <button
//           className={`${styles.button} bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
//         >
//           <RiAddCircleLine className="mr-2" /> Agregar Producto
//         </button>
//         <button
//           className={`${styles.button} bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
//         >
//           <RiTruckLine className="mr-2" /> Gestionar Envíos
//         </button>
//       </div>
//       <div className="card py-4">
//         <h2 className="cardTitle">
//           <RiMailLine className="mr-2" /> Mensajes
//         </h2>
//         {/* Aquí puedes mostrar los mensajes */}
//         <p>Hola estoy interesado en comprar por lotes...</p>
//       </div>

//       {showModal && (
//         <div className={styles.modalOverlay}>
//           <div className={styles.modalContent}>
//             <button onClick={handleCloseModal} className={styles.closeButton}>×</button>
//             <h2 className="text-2xl font-semibold text-center text-gray-400 mb-4">Pedidos del Productor</h2>
//             {loading ? (
//               <div>Cargando...</div>
//             ) : error ? (
//               <div>{error}</div>
//             ) : (
//               <table className={styles.table}>
//                 <thead>
//                   <tr>
//                     <th>ID del Tendero</th>
//                     <th>Cantidad Solicitada</th>
//                     <th>Estado del Pedido</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {pedidos.length > 0 ? (
//                     pedidos.map((pedido) => (
//                       <tr key={pedido.id}>
//                         <td>{pedido.tenderoId}</td>
//                         <td>{pedido.cantidad}</td>
//                         <td>{pedido.estado}</td>
//                       </tr>
//                     ))
//                   ) : (
//                     <tr>
//                       <td colSpan="3">No hay pedidos para este productor.</td>
//                     </tr>
//                   )}
//                 </tbody>
//               </table>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProductorPedidos;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import {
//   RiMessage2Line,
//   RiShoppingBasketLine,
//   RiLineChartLine,
//   RiTruckLine,
//   RiMailLine,
// } from "react-icons/ri";
// import styles from "./ProductorPedidos.module.css";
// import Ventas from "../Ventas/Ventas"

// const ProductorPedidos = () => {
//   const [showModal, setShowModal] = useState(false);
//   const [pedidos, setPedidos] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const productorId = localStorage.getItem("productorId"); // Obtener el ID del Productor almacenado en localStorage
//   console.log("ID del Productor:", productorId);

//   const [selectedTendero, setSelectedTendero] = useState(null); // almacenar info del tendero

//   useEffect(() => {
//     const obtenerPedidos = async () => {
//       if (showModal && productorId) {
//         setLoading(true);
//         try {
//           console.log("Realizando solicitud para obtener pedidos...");
//           const response = await axios.get(
//             `http://localhost:3001/pedidos?productorId=${productorId}`
//           );
//           console.log("Respuesta de la solicitud:", response.data);
//           setPedidos(response.data);
//         } catch (error) {
//           console.error("Error al obtener los pedidos del Productor:", error);
//           setError(
//             "Error al obtener los pedidos. Inténtalo de nuevo más tarde."
//           );
//         } finally {
//           setLoading(false);
//         }
//       }
//     };

//     obtenerPedidos();
//   }, [showModal, productorId]);

//   const handleShowModal = async () => {
//     setShowModal(true);
//     if (showModal && productorId) {
//       setLoading(true);
//       try {
//         console.log("Realizando solicitud para obtener pedidos...");
//         const response = await axios.get(
//           `http://localhost:3001/pedidos?productorId=${productorId}`
//         );
//         console.log("Respuesta de la solicitud:", response.data);
//         setPedidos(response.data);
//       } catch (error) {
//         console.error("Error al obtener los pedidos del Productor:", error);
//         setError("Error al obtener los pedidos. Inténtalo de nuevo más tarde.");
//       } finally {
//         setLoading(false);
//       }
//     }

//     // Obtener información del tendero para cada pedido
//     try {
//       const pedidosConTenderos = await Promise.all(
//         pedidos.map(async (pedido) => {
//           const tenderoResponse = await axios.get(
//             `http://localhost:3001/tenderos/${pedido.tenderoId}`
//           );
//           return {
//             ...pedido,
//             tendero: tenderoResponse.data,
//           };
//         })
//       );
//       setPedidos(pedidosConTenderos);
//     } catch (error) {
//       console.error("Error al obtener la información de los tenderos:", error);
//     }
//   };

//   const handleCloseModal = () => {
//     setShowModal(false);
//   };

//   const handleTenderoDetailsClick = async (tenderoId) => {
//     setLoading(true); // Mostrar el indicador de carga mientras se obtiene la información del tendero
//     try {
//       const response = await axios.get(
//         `http://localhost:3001/tenderos/${tenderoId}`
//       ); // Solicitud para obtener la información del tendero
//       setSelectedTendero(response.data); // Actualizar el estado con la información del tendero
//     } catch (error) {
//       console.error("Error al obtener la información del tendero:", error);
//       // Manejar el error de manera adecuada
//     } finally {
//       setLoading(false); // Ocultar el indicador de carga una vez que se haya completado la solicitud
//     }
//   };

//   return (
//     <div className={`${styles.container} p-6`}>
//       <h1 className="text-4xl font-bold text-center text-gray-500 mb-6 ">
//         Pollos a un click - Productor
//       </h1>
//       <h2 className="text-2xl font-semibold text-center text-gray-400 mb-8">
//         Panel de administración - Gestionar Pedidos
//       </h2>
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//         <button
//           className={`${styles.button} bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
//           onClick={handleShowModal}
//         >
//           <RiShoppingBasketLine className="mr-2" /> Ver Pedidos
//         </button>
//         <button
//           className={`${styles.button} bg-gray-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
//         >
//           <RiMessage2Line className="mr-2" /> Ver Mensajes
//         </button>
//         <button
//           className={`${styles.button} bg-gray-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
//         >
//           <RiLineChartLine className="mr-2" /> Ver Estadísticas
//         </button>
//         <button
//           className={`${styles.button} bg-gray-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
//         >
//           <RiTruckLine className="mr-2" /> Gestionar Envíos
//         </button>
//       </div>
//       <div className="card py-4">
//         <h2 className="cardTitle">
//           <RiMailLine className="mr-2" /> Mensajes
//         </h2>
//         {/* Aquí puedes mostrar los mensajes */}
//       </div>

//       {showModal && (
//         <div className={styles.modalOverlay}>
//           <div className={styles.modalContent}>
//             <button onClick={handleCloseModal} className={styles.closeButton}>
//               ×
//             </button>
//             <h2 className="text-2xl font-semibold text-center text-gray-400 mb-4">
//               Pedidos del Productor
//             </h2>
//             {loading ? (
//               <div>Cargando...</div>
//             ) : error ? (
//               <div>{error}</div>
//             ) : (
//               <table className={styles.table}>
//                 <thead>
//                   <tr>
//                     <th>ID del Tendero</th>
//                     <th>Nombre Tendero</th>
//                     <th>Contacto</th>
//                     <th>Cantidad Solicitada</th>
//                     <th>Fecha</th>
//                     <th>Estado del Pedido</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {/* {pedidos.length > 0 ? (
//                     pedidos.map((pedido) => (
//                       <tr key={pedido.id}>
//                         <td onClick={() => handleTenderoDetailsClick(pedido.tenderoId)}>{pedido.tenderoId}</td>
//                         <td>{pedido.cantidad}</td>
//                         <td>{pedido.estado}</td>
//                       </tr>
//                     ))
//                   ) : (
//                     <tr>
//                       <td colSpan="3">No hay pedidos para este productor.</td>
//                     </tr>
//                   )} */}

//                   {pedidos.length > 0 ? (
//                     pedidos.map((pedido) => (
//                       <tr key={pedido.id}>
//                         <td
//                           onClick={() =>
//                             handleTenderoDetailsClick(pedido.tenderoId)
//                           }
//                         >
//                           {pedido.tenderoId}
//                         </td>
//                         <td>
//                           {pedido.tendero
//                             ? pedido.tendero.name
//                             : "Nombre no disponible"}
//                         </td>{" "}
//                         {/* Manejar el caso cuando no hay información del tendero */}
//                         <td>
//                           {pedido.tendero
//                             ? pedido.tendero.email
//                             : "Email no disponible"}
//                         </td>{" "}
//                         {/* Manejar el caso cuando no hay información del tendero */}
//                         <td>{pedido.cantidad}</td>
//                         <td>{pedido.fecha}</td>
//                         <td>{pedido.estado}</td>
//                       </tr>
//                     ))
//                   ) : (
//                     <tr>
//                       <td colSpan="5">No hay pedidos para este productor.</td>
//                     </tr>
//                   )}
//                 </tbody>
//               </table>
//             )}
//           </div>
//         </div>
//       )}

//       <Ventas />
//     </div>
//   );
// };

// export default ProductorPedidos;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { CSSTransition } from "react-transition-group";
// import {
//   RiMessage2Line,
//   RiShoppingBasketLine,
//   RiLineChartLine,
//   RiTruckLine,
//   RiMailLine,
// } from "react-icons/ri";
// import styles from "./ProductorPedidos.module.css";
// import Ventas from "../Ventas/Ventas";
// import GestionDeEnvios from "../GestionDeEnvios/GestionDeEnvios";
// import Messages from "../Messages/Messages";

// const ProductorPedidos = () => {
//   const [showModal, setShowModal] = useState(false);
//   const [pedidos, setPedidos] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const productorId = localStorage.getItem("productorId"); // Obtener el ID del Productor almacenado en localStorage
//   const [showVentas, setShowVentas] = useState(false); // Nuevo estado para mostrar el componente Ventas
//   const [showTable, setShowTable] = useState(false);

//   const [selectedTendero, setSelectedTendero] = useState(null); // almacenar info del tendero

//   useEffect(() => {
//     const obtenerPedidos = async () => {
//       if (showModal && productorId) {
//         setLoading(true);
//         try {
//           const response = await axios.get(
//             `http://localhost:3001/pedidos?productorId=${productorId}`
//           );
//           setPedidos(response.data);
//         } catch (error) {
//           setError(
//             "Error al obtener los pedidos. Inténtalo de nuevo más tarde."
//           );
//         } finally {
//           setLoading(false);
//         }
//       }
//     };

//     obtenerPedidos();
//   }, [showModal, productorId]);

//   const handleShowModal = async () => {
//     setShowModal(true);
//     if (showModal && productorId) {
//       setLoading(true);
//       try {
//         const response = await axios.get(
//           `http://localhost:3001/pedidos?productorId=${productorId}`
//         );
//         setPedidos(response.data);
//       } catch (error) {
//         setError("Error al obtener los pedidos. Inténtalo de nuevo más tarde.");
//       } finally {
//         setLoading(false);
//       }
//     }

//     // Obtener información del tendero para cada pedido
//     try {
//       const pedidosConTenderos = await Promise.all(
//         pedidos.map(async (pedido) => {
//           const tenderoResponse = await axios.get(
//             `http://localhost:3001/tenderos/${pedido.tenderoId}`
//           );
//           return {
//             ...pedido,
//             tendero: tenderoResponse.data,
//           };
//         })
//       );
//       setPedidos(pedidosConTenderos);
//     } catch (error) {
//       console.error("Error al obtener la información de los tenderos:", error);
//     }
//   };

//   const handleCloseModal = () => {
//     setShowModal(false);
//   };

//   const handleTenderoDetailsClick = async (tenderoId) => {
//     setLoading(true); // Mostrar el indicador de carga mientras se obtiene la información del tendero
//     try {
//       const response = await axios.get(
//         `http://localhost:3001/tenderos/${tenderoId}`
//       ); // Solicitud para obtener la información del tendero
//       setSelectedTendero(response.data); // Actualizar el estado con la información del tendero
//     } catch (error) {
//       console.error("Error al obtener la información del tendero:", error);
//       // Manejar el error de manera adecuada
//     } finally {
//       setLoading(false); // Ocultar el indicador de carga una vez que se haya completado la solicitud
//     }
//   };

//   const toggleShowVentas = () => {
//     setShowVentas(!showVentas);
//   };

//   return (
//     <div className={`${styles.container} p-6`}>
//       <h1 className="text-4xl font-bold text-center text-gray-500 mb-6 ">
//         Pollos a un click - Productor
//       </h1>
//       <h2 className="text-2xl font-semibold text-center text-gray-400 mb-8">
//         Panel de administración - Gestionar Pedidos
//       </h2>
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//         <button
//           className={`${styles.button} bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
//           onClick={handleShowModal}
//         >
//           <RiShoppingBasketLine className="mr-2" /> Ver Pedidos
//         </button>
//         <button
//           className={`${styles.button} bg-gray-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
//         >
//           <RiMessage2Line className="mr-2" /> Ver Mensajes
//         </button>
//         <button
//           className={`${styles.button} bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
//           onClick={toggleShowVentas}
//         >
//           <RiLineChartLine className="mr-2" />{" "}
//           {showVentas ? "Ocu. Estadísticas" : "Ver Estadísticas"}
//         </button>
//         <button
//           className={`${styles.button} bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
//           onClick={() => setShowTable(!showTable)}
//         >
//           <RiTruckLine className="mr-2" /> {showTable ? "Ocultar" : "Mostrar"}{" "}
//           Envíos
//         </button>
//       </div>
//       <div className="card py-4">
//         <h2 className="cardTitle">
//           <RiMailLine className="mr-2" /> Mensajes
//         </h2>
//         {/* Aquí puedes mostrar los mensajes */}
//       </div>
//       {showModal && (
//         <div className={styles.modalOverlay}>
//           <div className={styles.modalContent}>
//             <button onClick={handleCloseModal} className={styles.closeButton}>
//               ×
//             </button>
//             <h2 className="text-2xl font-semibold text-center text-gray-400 mb-4">
//               Pedidos del Productor
//             </h2>
//             {loading ? (
//               <div>Cargando...</div>
//             ) : error ? (
//               <div>{error}</div>
//             ) : (
//               <table className={styles.table}>
//                 <thead>
//                   <tr>
//                     <th>ID del Tendero</th>
//                     <th>Nombre Tendero</th>
//                     <th>Contacto</th>
//                     <th>Cantidad Solicitada</th>
//                     <th>Fecha</th>
//                     <th>Estado del Pedido</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {pedidos.length > 0 ? (
//                     pedidos.map((pedido) => (
//                       <tr key={pedido.id}>
//                         <td
//                           onClick={() =>
//                             handleTenderoDetailsClick(pedido.tenderoId)
//                           }
//                         >
//                           {pedido.tenderoId}
//                         </td>
//                         <td>
//                           {pedido.tendero
//                             ? pedido.tendero.name
//                             : "Nombre no disponible"}
//                         </td>
//                         <td>
//                           {pedido.tendero
//                             ? pedido.tendero.email
//                             : "Email no disponible"}
//                         </td>
//                         <td>{pedido.cantidad}</td>
//                         <td>{pedido.fecha}</td>
//                         <td>{pedido.estado}</td>
//                       </tr>
//                     ))
//                   ) : (
//                     <tr>
//                       <td colSpan="6">No hay pedidos para este productor.</td>
//                     </tr>
//                   )}
//                 </tbody>
//               </table>
//             )}
//           </div>
//         </div>
//       )}
//       {showVentas && <Ventas />} {/* Mostrar el componente Ventas */}
//       <CSSTransition
//         in={showTable}
//         timeout={300}
//         classNames="fade"
//         unmountOnExit
//       >
//         <GestionDeEnvios />
//       </CSSTransition>


//       <Messages />

//     </div>
//   );
// };

// export default ProductorPedidos;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { CSSTransition } from "react-transition-group";
import {
  RiMessage2Line,
  RiShoppingBasketLine,
  RiLineChartLine,
  RiTruckLine,
} from "react-icons/ri";
import { Card } from '@tremor/react';
import styles from "./ProductorPedidos.module.css";
import Ventas from "../Ventas/Ventas";
import GestionDeEnvios from "../GestionDeEnvios/GestionDeEnvios";
import Messages from "../Messages/Messages";

const ProductorPedidos = () => {
  const [showModal, setShowModal] = useState(false);
  const [pedidos, setPedidos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const productorId = localStorage.getItem("productorId");
  const [showVentas, setShowVentas] = useState(false);
  const [showTable, setShowTable] = useState(false);
  const [showMessages, setShowMessages] = useState(false); // Estado para controlar la visibilidad de los mensajes

  const [selectedTendero, setSelectedTendero] = useState(null);

  useEffect(() => {
    const obtenerPedidos = async () => {
      if (showModal && productorId) {
        setLoading(true);
        try {
          const response = await axios.get(
            `http://localhost:3001/pedidos?productorId=${productorId}`
          );
          setPedidos(response.data);
        } catch (error) {
          setError(
            "Error al obtener los pedidos. Inténtalo de nuevo más tarde."
          );
        } finally {
          setLoading(false);
        }
      }
    };

    obtenerPedidos();
  }, [showModal, productorId]);

  const handleShowModal = async () => {
    setShowModal(true);
    if (showModal && productorId) {
      setLoading(true);
      try {
        const response = await axios.get(
          `http://localhost:3001/pedidos?productorId=${productorId}`
        );
        setPedidos(response.data);
      } catch (error) {
        setError("Error al obtener los pedidos. Inténtalo de nuevo más tarde.");
      } finally {
        setLoading(false);
      }
    }

    try {
      const pedidosConTenderos = await Promise.all(
        pedidos.map(async (pedido) => {
          const tenderoResponse = await axios.get(
            `http://localhost:3001/tenderos/${pedido.tenderoId}`
          );
          return {
            ...pedido,
            tendero: tenderoResponse.data,
          };
        })
      );
      setPedidos(pedidosConTenderos);
    } catch (error) {
      console.error("Error al obtener la información de los tenderos:", error);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleTenderoDetailsClick = async (tenderoId) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:3001/tenderos/${tenderoId}`
      );
      setSelectedTendero(response.data);
    } catch (error) {
      console.error("Error al obtener la información del tendero:", error);
    } finally {
      setLoading(false);
    }
  };

  const toggleShowVentas = () => {
    setShowVentas(!showVentas);
  };

  const toggleShowTable = () => {
    setShowTable(!showTable);
  };

  const toggleShowMessages = () => {
    setShowMessages(!showMessages); // Cambiar el estado de visibilidad de los mensajes
  };

  return (
    <div className={`${styles.container} p-6`}>
      <h1 className="text-4xl font-bold text-center text-gray-500 mb-6 ">
        Pollos a un click - Productor
      </h1>
      <h2 className="text-2xl font-semibold text-center text-gray-400 mb-8">
        Panel de administración - Gestionar Pedidos
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <button
          className={`${styles.button} bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
          onClick={handleShowModal}
        >
          <RiShoppingBasketLine className="mr-2" /> Ver Pedidos
        </button>
        <button
          className={`${styles.button} bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
          onClick={toggleShowMessages} // Cambiado para controlar la visibilidad de los mensajes
        >
          <RiMessage2Line className="mr-2" /> {showMessages ? "Ocultar" : "Mostrar"} Mensajes
        </button>
        <button
          className={`${styles.button} bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
          onClick={toggleShowVentas}
        >
          <RiLineChartLine className="mr-2" />{" "}
          {showVentas ? "Ocu. Estadísticas" : "Ver Estadísticas"}
        </button>
        <button
          className={`${styles.button} bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
          onClick={toggleShowTable}
        >
          <RiTruckLine className="mr-2" /> {showTable ? "Ocultar" : "Mostrar"}{" "}
          Envíos
        </button>
      </div>
      {showModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <button onClick={handleCloseModal} className={styles.closeButton}>
              ×
            </button>
            <h2 className="text-2xl font-semibold text-center text-gray-400 mb-4">
              Pedidos del Productor
            </h2>
            {loading ? (
              <div>Cargando...</div>
            ) : error ? (
              <div>{error}</div>
            ) : (
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>ID del Tendero</th>
                    <th>Nombre Tendero</th>
                    <th>Contacto</th>
                    <th>Cantidad Solicitada</th>
                    <th>Fecha</th>
                    <th>Estado del Pedido</th>
                  </tr>
                </thead>
                <tbody>
                  {pedidos.length > 0 ? (
                    pedidos.map((pedido) => (
                      <tr key={pedido.id}>
                        <td
                          onClick={() =>
                            handleTenderoDetailsClick(pedido.tenderoId)
                          }
                        >
                          {pedido.tenderoId}
                        </td>
                        <td>
                          {pedido.tendero
                            ? pedido.tendero.name
                            : "Nombre no disponible"}
                        </td>
                        <td>
                          {pedido.tendero
                            ? pedido.tendero.email
                            : "Email no disponible"}
                        </td>
                        <td>{pedido.cantidad}</td>
                        <td>{pedido.fecha}</td>
                        <td>{pedido.estado}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="6">No hay pedidos para este productor.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            )}
          </div>
        </div>
      )}
      {showVentas && <Card className="mx-auto max-w-3xl"><Ventas /></Card>} {/* Mostrar el componente Ventas */}
      <CSSTransition
        in={showTable}
        timeout={300}
        classNames="fade"
        unmountOnExit
      >
        <GestionDeEnvios />
      </CSSTransition>

      <CSSTransition
        in={showMessages} // Cambiado para controlar la visibilidad de los mensajes
        timeout={300}
        classNames="fade"
        unmountOnExit
      >
        <Messages />
      </CSSTransition>
    </div>
  );
};

export default ProductorPedidos;

