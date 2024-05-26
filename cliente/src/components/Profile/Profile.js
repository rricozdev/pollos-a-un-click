// import React from "react";
// import { useAuth0 } from "@auth0/auth0-react";
// // import JSONPretty from 'react-json-pretty';

// const Profile = () => {
//   const { user, isAuthenticated } = useAuth0();
//   return (
//     isAuthenticated && (
//         <div>
//       <img src={user.picture} alt={user.name} />
//       <h2>{user.name}</h2>
//       <p>{user.email}</p>
//       {/* {<JSONPretty data={user}/>} */}
//     </div>
//     )
//   );
// };

// export default Profile;


// import React from "react";
// import { useAuth0 } from "@auth0/auth0-react";
// import styles from "./Profile.module.css"; // Importa el CSS Module
// import { FaCalendarAlt, FaFacebookMessenger, FaBox, FaClipboardCheck, FaChartLine } from 'react-icons/fa'; // Importa los iconos de react-icons

// const Profile = () => {
//   const { user, isAuthenticated } = useAuth0();

//   return (
//     isAuthenticated && (
//       <div className={styles.sidebar}>
//         <img src={user.picture} alt={user.name} className={styles.profilePicture} />
//         <h2 className={styles.profileName}>{user.name}</h2>
//         <p className={styles.profileEmail}>{user.email}</p>

//         <div className={styles.menuItem}>
//           <FaCalendarAlt className={styles.icon} />
//           <span>Calendario</span>
//         </div>
//         <div className={styles.menuItem}>
//           <FaFacebookMessenger className={styles.icon} />
//           <span>Mensajes</span>
//         </div>
//         <div className={styles.menuItem}>
//           <FaBox className={styles.icon} />
//           <span>Mis Pedidos</span>
//         </div>
//         <div className={styles.menuItem}>
//           <FaClipboardCheck className={styles.icon} />
//           <span>Status Pedido</span>
//         </div>
//         <div className={styles.menuItem}>
//           <FaChartLine className={styles.icon} />
//           <span>Ventas</span>
//         </div>
//       </div>
//     )
//   );
// };

// export default Profile;

import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styles from "./Profile.module.css"; // Importa el CSS Module
import { FaCalendarAlt, FaFacebookMessenger, FaBox, FaClipboardCheck, FaChartLine } from 'react-icons/fa'; // Importa los iconos de react-icons
import Logout from "../Logout/Logout"; // Importa el componente Logout

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <div className={styles.sidebar}>
        <img src={user.picture} alt={user.name} className={styles.profilePicture} />
        <h2 className={styles.profileName}>{user.name}</h2>
        <p className={styles.profileEmail}>{user.email}</p>

        <div className={styles.menuItem}>
          <FaCalendarAlt className={styles.icon} />
          <span>Calendario</span>
        </div>
        <div className={styles.menuItem}>
          <FaFacebookMessenger className={styles.icon} />
          <span>Mensajes</span>
        </div>
        <div className={styles.menuItem}>
          <FaBox className={styles.icon} />
          <span>Mis Pedidos</span>
        </div>
        <div className={styles.menuItem}>
          <FaClipboardCheck className={styles.icon} />
          <span>Status Pedido</span>
        </div>
        <div className={styles.menuItem}>
          <FaChartLine className={styles.icon} />
          <span>Ventas</span>
        </div>
        <div className={styles.logoutItem}>
          <Logout />
        </div>
      </div>
    )
  );
};

export default Profile;
