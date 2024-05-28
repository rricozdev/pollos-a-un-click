import React from "react";
import styles from "./ProductorPedidos.module.css";
import { FaRegCalendarAlt, FaRegClock } from "react-icons/fa"; // Importa los iconos de Font Awesome

const ProductorPedidos = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Pollos a un click - Productor</h1>
      <h2 className={styles.subheading}>Panel de administración - Gestionar Pedidos</h2>
      <div className={styles.buttonsContainer}>
        <button className={styles.button}>Realizar Pedido</button>
        <button className={styles.button}>Cancelar Pedido</button>
        <button className={styles.button}>Pedidos Actuales (Status)</button>
        <button className={styles.button}>Historial de Pedidos</button>
        <button className={styles.button}>Repetir Pedido</button>
      </div>

      {/* Card de Eventos Próximos */}
      <div className={styles.card}>
        <h2 className={styles.cardTitle}>Upcoming Events</h2>
        <div className={styles.event}>
          <div className={styles.eventDate}>
            <span className={styles.month}>MAY</span>
            <span className={styles.day}>29</span>
          </div>
          <div className={styles.eventDetails}>
            <div className={styles.eventTime}>
              <FaRegClock /> 17:00 to 18:00
            </div>
            <div>Meeting with partners</div>
          </div>
        </div>
        {/* Más eventos aquí... */}
      </div>

      {/* Card de Conversación de Chat */}
      <div className={styles.card}>
        <h2 className={styles.cardTitle}>App Chat con Productores</h2>
        <div className={styles.chat}>
          {/* Aquí se pueden agregar mensajes de chat utilizando Tremor */}
          <div className={styles.message}>
            <div className={styles.sender}>Juan</div>
            <div className={styles.messageBody}>¡Hola! ¿Cómo estás?</div>
          </div>
          <div className={styles.message}>
            <div className={styles.sender}>María</div>
            <div className={styles.messageBody}>Hola Juan, bien gracias ¿y tú?</div>
          </div>
          {/* Más mensajes aquí... */}
        </div>
      </div>
    </div>
  );
};

export default ProductorPedidos;



