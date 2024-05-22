import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import chickenImage from '../../assets/logo.png';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.imageContainer}>
                <div className={styles.background}>
                    <img src={chickenImage} alt="Chicken" className={styles.image} />
                    <h2 className={styles.subtitle}>Conecta con los productores locales </h2>
                    <p className={styles.description}>
                        Facilitamos la compra y pedido de pollos en tu área, eliminando intermediarios y asegurando siempre la demanda justa sin sobreproducción.
                    </p>
                    <Link to="/login" className={styles.button}>Comenzar</Link>
                </div>
            </div>
        </header>
    );
}

export default Header;

