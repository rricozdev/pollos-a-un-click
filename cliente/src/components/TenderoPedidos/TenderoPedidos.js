import React from "react";
import styles from "./TenderoPedidos.module.css";

const TenderoPedidos = () => {
  return (
    <div className={styles.container}>
      <h1>Pollos a un click. - Tendero</h1>
      <h2 className={styles.title}>Panel de administración - Gestionar Pedidos</h2>
      <div className={styles.buttonsContainer}>
        <button className={styles.button}>Realizar Pedido</button>
        <button className={styles.button}>Cancelar Pedido</button>
        <button className={styles.button}>Pedidos Actuales (Status)</button>
        <button className={styles.button}>Historial de Pedidos</button>
        <button className={styles.button}>Repetir Pedido</button>
      </div>
    </div>
  );
};

export default TenderoPedidos;

