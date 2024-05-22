import React from "react";
import styles from "./HowItWorks.module.css";

const HowItWorks = () => {
  return (
    <section className={styles.howItWorks}>
      <h2>Cómo funciona</h2>
      <p>
        Tenderos locales, escuchamos tus necesidades! Ahora puedes contactar
        directamente a los productores de pollos de tu zona según la demanda de
        tu negocio.
      </p>

      <div className={styles.cardRows}>
        <div className={styles.cardRow}>
          <div className={styles.card}>
            <div className={styles.cardContent}>
              <h3>Publica tus necesidades</h3>
              <p>
                Comparte tus requerimientos de suministro de pollos con los
                productores locales.
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardContent}>
              <h3>Coordinar el intercambio</h3>
              <p>
                Coordina el intercambio de pollos con los productores locales de
                manera conveniente.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.cardRow}>
          <div className={styles.card}>
            <div className={styles.cardContent}>
              <h3>Realizar intercambio</h3>
              <p>
                Realiza el intercambio de pollos con otros granjeros según tus
                necesidades.
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardContent}>
              <h3>Finalizar transacción</h3>
              <p>
                Finaliza la transacción y asegúrate de tener una experiencia
                satisfactoria.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
