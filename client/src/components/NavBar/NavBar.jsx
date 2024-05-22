import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import styles from './NavBar.module.css';

const NavBar = () => {
    return (
        <nav className={styles.navBar}>
            <Link to="/" className={styles.navLink}>
                <FaHome className={styles.icon} />
                <span className={styles.linkText}>Home</span>
            </Link>
        </nav>
    );
}

export default NavBar;
