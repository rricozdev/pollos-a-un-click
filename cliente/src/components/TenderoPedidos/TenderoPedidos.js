import React, { useState } from "react";
import axios from "axios";
import {
  RiEdit2Line,
  RiShoppingCartFill,
  RiCloseLine,
  RiCheckboxCircleLine,
  RiHistoryLine,
  RiRepeatLine,
  RiSearchLine,
  RiQuestionLine,
} from "@remixicon/react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Modal from "../Modal/Modal";
import styles from "./TenderoPedidos.module.css";

const MySwal = withReactContent(Swal);

const TenderoPedidos = () => {
  const [showModal, setShowModal] = useState(false);
  const [cantidad, setCantidad] = useState("");
  const [productores, setProductores] = useState([]);
  const [selectedProductor, setSelectedProductor] = useState(null);

  const handleOpenModal = async () => {
    await fetchProductores();
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setCantidad("");
    setSelectedProductor(null);
  };

  const handleCantidadChange = (event) => {
    setCantidad(event.target.value);
  };

  const fetchProductores = async () => {
    try {
      const response = await axios.get("http://localhost:3001/productores");
      setProductores(response.data);
    } catch (error) {
      console.error("Error fetching productores:", error);
    }
  };

  const handleSubmitPedido = async () => {
    const tenderoId = localStorage.getItem("tenderoId");
    console.log("tenderoId recuperado de localStorage:", tenderoId);

    if (!tenderoId) {
      console.error("No se encontró el ID del tendero en localStorage");
      return;
    }

    const pedido = {
      cantidad: cantidad,
      tenderoId: tenderoId,
      productorId: selectedProductor.id,
    };

    try {
      const response = await axios.post(
        "http://localhost:3001/pedidos",
        pedido
      );
      console.log("Pedido enviado:", response.data);
      MySwal.fire({
        title: 'Pedido realizado',
        text: 'El pedido se ha realizado con éxito.',
        icon: 'success',
        confirmButtonText: 'Aceptar'
      });
      handleCloseModal();
    } catch (error) {
      console.error("Error al enviar el pedido:", error);
      MySwal.fire({
        title: 'Error',
        text: 'Hubo un problema al realizar el pedido. Por favor, intenta nuevamente.',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
    }
  };

  const handleSelectProductor = (productor) => {
    setSelectedProductor(productor);
  };

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
          className={`${styles.button} bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
          onClick={handleOpenModal}
        >
          <RiShoppingCartFill className="inline-block mr-2" />
          Realizar Pedido
        </button>
        <button
          className={`${styles.button} bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
        >
          <RiEdit2Line className="inline-block mr-2" />
          Editar Pedido
        </button>
        <button
          className={`${styles.button} bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
        >
          <RiCloseLine className="inline-block mr-2" />
          Cancelar Pedido
        </button>
        <button
          className={`${styles.button} bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
        >
          <RiCheckboxCircleLine className="inline-block mr-2" /> Status Pedidos
        </button>
        <button
          className={`${styles.button} bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
        >
          <RiHistoryLine className="inline-block mr-2" /> Historial
        </button>
        <button
          className={`${styles.button} bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
        >
          <RiRepeatLine className="inline-block mr-2" /> Repetir Pedido
        </button>
        <button
          className={`${styles.button} bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
        >
          <RiSearchLine className="inline-block mr-2" /> Seguimiento
        </button>
        <button
          className={`${styles.button} bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
        >
          <RiQuestionLine className="inline-block mr-2" /> Soporte
        </button>
        {/* Otros botones */}
      </div>
      {showModal && (
        <Modal onClose={handleCloseModal} onSubmit={handleSubmitPedido}>
          <h2 className={styles.modalTitle}> Realizar Pedido</h2>
          <label htmlFor="productor" className={styles.modalLabel}>Seleccionar Productor:</label>
          <select
            id="productor"
            value={selectedProductor ? selectedProductor.id : ""}
            onChange={(e) => {
              const productorId = e.target.value;
              const productor = productores.find(
                (p) => p.id === parseInt(productorId)
              );
              handleSelectProductor(productor);
            }}
            className={styles.modalInput}
          >
            <option value="" disabled>
              Selecciona un productor
            </option>
            {productores.map((productor) => (
              <option key={productor.id} value={productor.id}>
                {productor.name} - {productor.location}
              </option>
            ))}
          </select>
          {selectedProductor && (
            <div className={styles.modalDetails}>
              <h3>Detalles del Productor:</h3>
              <p>Nombre: {selectedProductor.name}</p>
              <p>Ubicación: {selectedProductor.location}</p>
              <p>Cantidad disponible: {selectedProductor.quantity}</p>
            </div>
          )}
          <label htmlFor="cantidad" className={styles.modalLabel}>Cantidad:</label>
          <input
            type="number"
            id="cantidad"
            value={cantidad}
            onChange={handleCantidadChange}
            min="1"
            max={selectedProductor ? selectedProductor.quantity : ""}
            className={styles.modalInput}
          />
        </Modal>
      )}
    </div>
  );
};

export default TenderoPedidos;
