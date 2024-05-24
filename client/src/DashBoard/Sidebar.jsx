// import React from "react";
// import { Link } from "react-router-dom";
// import { FaHome, FaChartBar, FaTable } from "react-icons/fa";
// import DropdownMenu from "../components/DropdownMenu/DropdownMenu";
// import styles from "./Sidebar.module.css";

// const Sidebar = () => {
//   return (
//     <div>
//         <DropdownMenu />
//       <div className={styles.sidebar}>
//         <h2>Dashboard</h2>
//         <nav className={styles.nav}>
//           <Link to="/" className={styles.navLink}>
//             <FaHome /> Home
//           </Link>
//           <Link to="/summary" className={styles.navLink}>
//             <FaChartBar /> Summary
//           </Link>
//           <Link to="/table" className={styles.navLink}>
//             <FaTable /> Data Table
//           </Link>
//         </nav>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;


import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaChartBar, FaTable } from 'react-icons/fa';
import Navbar from '../components/DropdownMenu/DropdownMenu'; // Importamos el componente Navbar
import styles from './Sidebar.module.css';

const Sidebar = () => {
    return (
        <div className={styles.layout}>
            <Navbar />  {/* Renderizamos la Navbar en la parte superior */}
            <div className={styles.sidebar}>
                <h2>Dashboard</h2>
                <nav className={styles.nav}>
                    <Link to="/" className={styles.navLink}>
                        <FaHome /> Home
                    </Link>
                    <Link to="/summary" className={styles.navLink}>
                        <FaChartBar /> Summary
                    </Link>
                    <Link to="/table" className={styles.navLink}>
                        <FaTable /> Data Table
                    </Link>
                </nav>
            </div>
        </div>
    );
}

export default Sidebar;
