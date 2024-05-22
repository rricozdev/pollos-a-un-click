import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';

const NotFound = () => {
    return (
        <div className={styles.notFoundContainer}>
            <h1 className={styles.title}>404</h1>
            <p className={styles.description}>Lo sentimos, la página que buscas no existe.</p>
            <Link to="/" className={styles.homeButton}>Volver al Inicio</Link>
        </div>
    );
}

export default NotFound;
