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

// Funciona ok
// import React from "react";
// import { useAuth0 } from "@auth0/auth0-react";
// import styles from "./Profile.module.css"; // Importa el CSS Module
// import { FaCalendarAlt, FaFacebookMessenger, FaBox, FaClipboardCheck, FaChartLine } from 'react-icons/fa'; // Importa los iconos de react-icons
// import Logout from "../Logout/Logout"; // Importa el componente Logout

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
//         <div className={styles.logoutItem}>
//           <Logout />
//         </div>
//       </div>
//     )
//   );
// };

// export default Profile;

// Se ve bien
// import React, { useState, useEffect } from "react";
// import { useAuth0 } from "@auth0/auth0-react";
// import styles from "./Profile.module.css";
// import {
//   FaCalendarAlt,
//   FaFacebookMessenger,
//   FaBox,
//   FaClipboardCheck,
//   FaChartLine,
//   FaUserCircle
// } from 'react-icons/fa';

// const Profile = () => {
//   const { user, isAuthenticated, getAccessTokenSilently, logout } = useAuth0();
//   const [formData, setFormData] = useState({
//     identification: '',
//     name: '',
//     email: '',
//     role: '' // 'productor' or 'tendero'
//   });

//   useEffect(() => {
//     if (user) {
//       setFormData({
//         identification: '', // Inicialmente vacío hasta que el usuario lo ingrese
//         name: user.name || '',
//         email: user.email || '',
//         role: '' // Inicialmente vacío hasta que el usuario lo seleccione
//       });
//     }
//   }, [user]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const token = await getAccessTokenSilently();

//     await fetch('/api/users/updateProfile', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${token}`
//       },
//       body: JSON.stringify(formData)
//     });

//     // Aquí puedes manejar la respuesta del servidor
//   };

//   return (
//     isAuthenticated && (
//       <div className={styles.sidebar}>
//         <img src={user.picture} alt={user.name} className={styles.profilePicture} />
//         <h2 className={styles.profileName}>{user.name}</h2>
//         <p className={styles.profileEmail}>{user.email}</p>

//         <div className={styles.menuItem}>
//           <FaUserCircle className={styles.icon} />
//           <span>Mi Perfil</span>
//         </div>
//         <form onSubmit={handleSubmit} className={styles.form}>
//           <div className={styles.formGroup}>
//             <label htmlFor="identification">Número de Cédula</label>
//             <input
//               type="text"
//               id="identification"
//               name="identification"
//               value={formData.identification}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className={styles.formGroup}>
//             <label htmlFor="name">Nombre</label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className={styles.formGroup}>
//             <label htmlFor="email">Correo Electrónico</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className={styles.formGroup}>
//             <label htmlFor="role">Rol</label>
//             <select
//               id="role"
//               name="role"
//               value={formData.role}
//               onChange={handleChange}
//               required
//             >
//               <option value="">Seleccione su rol</option>
//               <option value="productor">Productor</option>
//               <option value="tendero">Tendero</option>
//             </select>
//           </div>
//           <button type="submit" className={styles.submitButton}>Actualizar Perfil</button>
//         </form>

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

//         <div className={styles.logoutItem}>
//           <button onClick={() => logout()}>Logout</button>
//         </div>
//       </div>
//     )
//   );
// };

// export default Profile;

// se ve bien
// import React, { useState, useEffect } from "react";
// import { useAuth0 } from "@auth0/auth0-react";
// import styles from "./Profile.module.css";
// import {
//   FaCalendarAlt,
//   FaFacebookMessenger,
//   FaBox,
//   FaClipboardCheck,
//   FaChartLine,
//   FaUserCircle
// } from 'react-icons/fa';

// const Profile = () => {
//   const { user, isAuthenticated, getAccessTokenSilently, logout } = useAuth0();
//   const [formData, setFormData] = useState({
//     identification: '',
//     name: '',
//     email: '',
//     role: '' // 'productor' or 'tendero'
//   });

//   useEffect(() => {
//     if (user) {
//       setFormData({
//         identification: '', // Inicialmente vacío hasta que el usuario lo ingrese
//         name: user.name || '',
//         email: user.email || '',
//         role: '' // Inicialmente vacío hasta que el usuario lo seleccione
//       });
//     }
//   }, [user]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const token = await getAccessTokenSilently();

//     try {

//     await fetch('http://localhost:3001/users', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${token}`
//       },
//       body: JSON.stringify(formData)
//     });

//     // Aquí puedes manejar la respuesta del servidor
//     if (response.status >= 200 && response.status < 300) {
//               MySwal.fire({
//                 title: '¡Usuario creado!',
//                 text: 'Tu cuenta ha sido creada exitosamente.',
//                 timer: 8000,
//                 icon: 'success',
//                 confirmButtonText: 'Aceptar'
//               }).then(() => {
//                 setFormData({
//                   name: "",
//                   surnames: "",
//                   id: "",
//                   email: "",
//                   password: "",
//                   userType: ""
//                 });
//                 navigate("/login");
//               });
//             } else {
//               throw new Error("Error al crear el usuario");
//             }
//           } catch (error) {
//             MySwal.fire({
//               title: 'Error',
//               text: 'Hubo un problema al crear tu cuenta. Por favor, intenta nuevamente.',
//               icon: 'error',
//               confirmButtonText: 'Aceptar'
//             });
//             console.error("Error:", error);
//           }
//   };

//   return (
//     isAuthenticated && (
//       <div className={styles.container}>
//         <div className={styles.sidebar}>
//           <img src={user.picture} alt={user.name} className={styles.profilePicture} />
//           <h2 className={styles.profileName}>{user.name}</h2>
//           <p className={styles.profileEmail}>{user.email}</p>

//           <div className={styles.menuItem}>
//             <FaUserCircle className={styles.icon} />
//             <span>Mi Perfil</span>
//           </div>

//           <div className={styles.menuItem}>
//             <FaCalendarAlt className={styles.icon} />
//             <span>Calendario</span>
//           </div>
//           <div className={styles.menuItem}>
//             <FaFacebookMessenger className={styles.icon} />
//             <span>Mensajes</span>
//           </div>
//           <div className={styles.menuItem}>
//             <FaBox className={styles.icon} />
//             <span>Mis Pedidos</span>
//           </div>
//           <div className={styles.menuItem}>
//             <FaClipboardCheck className={styles.icon} />
//             <span>Status Pedido</span>
//           </div>
//           <div className={styles.menuItem}>
//             <FaChartLine className={styles.icon} />
//             <span>Ventas</span>
//           </div>

//           <div className={styles.logoutItem}>
//             <button onClick={() => logout()}>Logout</button>
//           </div>
//         </div>

//         <div className={styles.profileForm}>
//           <form onSubmit={handleSubmit} className={styles.form}>
//             <div className={styles.formGroup}>
//               <label htmlFor="identification">Número de Cédula</label>
//               <input
//                 type="text"
//                 id="identification"
//                 name="identification"
//                 value={formData.identification}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className={styles.formGroup}>
//               <label htmlFor="name">Nombre</label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className={styles.formGroup}>
//               <label htmlFor="email">Correo Electrónico</label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className={styles.formGroup}>
//               <label htmlFor="role">Rol</label>
//               <select
//                 id="role"
//                 name="role"
//                 value={formData.role}
//                 onChange={handleChange}
//                 required
//               >
//                 <option value="">Seleccione su rol</option>
//                 <option value="productor">Productor</option>
//                 <option value="tendero">Tendero</option>
//               </select>
//             </div>
//             <button type="submit" className={styles.submitButton}>Actualizar Perfil</button>
//           </form>
//         </div>
//       </div>
//     )
//   );
// };

// export default Profile;

// Este rompe las clases
// import React, { useState } from 'react';
// import { useAuth0 } from '@auth0/auth0-react';
// import axios from 'axios';
// import Swal from 'sweetalert2';
// import withReactContent from 'sweetalert2-react-content';
// import { useNavigate } from 'react-router-dom';
// import { FaUser, FaCalendarAlt, FaFacebookMessenger, FaBox, FaClipboardCheck, FaChartLine } from 'react-icons/fa';
// import styles from './Profile.module.css'; // Importa el CSS Module

// const MySwal = withReactContent(Swal);

// const Profile = () => {
//   const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
//   const [formData, setFormData] = useState({
//     identification: '',
//     name: user.name || '',
//     email: user.email || '',
//     password: '',
//     role: ''
//   });
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const token = await getAccessTokenSilently();

//     try {
//       const response = await axios.post('http://localhost:3001/users', formData, {
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${token}`
//         }
//       });

//       if (response.status >= 200 && response.status < 300) {
//         MySwal.fire({
//           title: '¡Usuario creado!',
//           text: 'Tu cuenta ha sido creada exitosamente.',
//           timer: 8000,
//           icon: 'success',
//           confirmButtonText: 'Aceptar'
//         }).then(() => {
//           setFormData({
//             identification: '',
//             name: '',
//             email: '',
//             password: '',
//             role: ''
//           });
//           navigate('/login');
//         });
//       } else {
//         throw new Error('Error al crear el usuario');
//       }
//     } catch (error) {
//       MySwal.fire({
//         title: 'Error',
//         text: 'Hubo un problema al crear tu cuenta. Por favor, intenta nuevamente.',
//         icon: 'error',
//         confirmButtonText: 'Aceptar'
//       });
//       console.error('Error:', error);
//     }
//   };

//   return (
//     isAuthenticated && (
//       <div className={styles.sidebar}>
//         <img src={user.picture} alt={user.name} className={styles.profilePicture} />
//         <h2 className={styles.profileName}>{user.name}</h2>
//         <p className={styles.profileEmail}>{user.email}</p>

//         <div className={styles.menuItem}>
//           <FaUser className={styles.icon} />
//           <span>Mi Perfil</span>
//         </div>
//         <form className={styles.profileForm} onSubmit={handleSubmit}>
//           <label>
//             Número de Cédula
//             <input type="text" name="identification" value={formData.identification} onChange={handleChange} />
//           </label>
//           <label>
//             Nombre
//             <input type="text" name="name" value={formData.name} onChange={handleChange} />
//           </label>
//           <label>
//             Correo Electrónico
//             <input type="email" name="email" value={formData.email} onChange={handleChange} />
//           </label>
//           <label>
//             Contraseña
//             <input type="password" name="password" value={formData.password} onChange={handleChange} />
//           </label>
//           <label>
//             Rol
//             <select name="role" value={formData.role} onChange={handleChange}>
//               <option value="">Seleccione su rol</option>
//               <option value="productor">Productor</option>
//               <option value="tendero">Tendero</option>
//             </select>
//           </label>
//           <button type="submit">Actualizar Perfil</button>
//         </form>

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

import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useNavigate } from "react-router-dom";
import {
  FaUserCircle,
  FaCalendarAlt,
  FaFacebookMessenger,
  FaBox,
  FaClipboardCheck,
  FaChartLine,
} from "react-icons/fa";
import styles from "./Profile.module.css"; // Importa el CSS Module

const MySwal = withReactContent(Swal);

const Profile = () => {
  const { user, isAuthenticated, getAccessTokenSilently, logout } = useAuth0();
  const [formData, setFormData] = useState({
    identification: "",
    name: user.name || "",
    email: user.email || "",
    password: "",
    role: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await getAccessTokenSilently();

    try {
      const response = await axios.post(
        "http://localhost:3001/users",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status >= 200 && response.status < 300) {
        MySwal.fire({
          title: "¡Usuario creado!",
          text: "Tu cuenta ha sido creada exitosamente.",
          timer: 8000,
          icon: "success",
          confirmButtonText: "Aceptar",
        }).then(() => {
          setFormData({
            identification: "",
            name: null,
            email: null,
            password: "",
            role: "",
          });
          navigate("/login");
        });
      } else {
        throw new Error("Error al crear el usuario");
      }
    } catch (error) {
      MySwal.fire({
        title: "Error",
        text: "Hubo un problema al crear tu cuenta. Por favor, intenta nuevamente.",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
      console.error("Error:", error);
    }
  };

  return (
    isAuthenticated && (
      <div className={styles.container}>
        <div className={styles.sidebar}>
          <img
            src={user.picture}
            alt={user.name}
            className={styles.profilePicture}
          />
          <h2 className={styles.profileName}>{user.name}</h2>
          <p className={styles.profileEmail}>{user.email}</p>

          <div className={styles.menuItem}>
            <FaUserCircle className={styles.icon} />
            <span>Mi Perfil</span>
          </div>
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
            <button onClick={() => logout()} className={styles.logoutButton}>
              Logout
            </button>
          </div>
        </div>

        <div className={styles.profileForm}>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="identification">Número de Cédula</label>
              <input
                type="text"
                id="identification"
                name="identification"
                value={formData.identification}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="name">Nombre</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Correo Electrónico</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="password">Contraseña</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="role">Rol</label>
              <select
                id="role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                required
              >
                <option value="">Seleccione su rol</option>
                <option value="productor">Productor</option>
                <option value="tendero">Tendero</option>
              </select>
            </div>
            <button type="submit" className={styles.submitButton}>
              Actualizar Perfil
            </button>
          </form>
        </div>
      </div>
    )
  );
};

export default Profile;
