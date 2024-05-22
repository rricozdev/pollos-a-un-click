// SummaryCards.jsx
import React from 'react';
import styles from './SummaryCards.module.css';

const SummaryCards = () => {
    return (
        <div className={styles.cardsContainer}>
            <div className={styles.card}>
                <h3>Total Users</h3>
                <p>1,234</p>
            </div>
            <div className={styles.card}>
                <h3>Sales</h3>
                <p>$5,678</p>
            </div>
            <div className={styles.card}>
                <h3>Orders</h3>
                <p>345</p>
            </div>
            <div className={styles.card}>
                <h3>Pending</h3>
                <p>23</p>
            </div>
        </div>
    );
}

export default SummaryCards;
