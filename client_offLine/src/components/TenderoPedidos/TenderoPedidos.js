import React from "react";
import styles from "./TenderoPedidos.module.css"; 

const TenderoPedidos = () => {
  return (
    <div className={styles.container}>
      <h2>Gestión de Pedidos</h2>
      <div className={styles.buttonsContainer}>
        <button className={styles.button}>Realizar Pedido</button>
        <button className={styles.button}>Cancelar Pedido</button>
        <button className={styles.button}>Pedidos actuales (status)</button>
      </div>
    </div>
  );
};

export default TenderoPedidos;
