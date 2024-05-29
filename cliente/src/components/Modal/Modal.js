import React from "react";
import styles from "./Modal.module.css";

const Modal = ({ onClose, onSubmit, children }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <button className={styles.closeButton} onClick={onClose}>
            X
          </button>
        </div>
        <div className={styles.content}>
          {children}
        </div>
        <div className={styles.footer}>
          <button className={styles.submitButton} onClick={onSubmit}>
            Enviar Pedido
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
