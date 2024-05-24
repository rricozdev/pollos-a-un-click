// // import React, { useState } from "react";
// // import { Link, useNavigate } from "react-router-dom";
// // import { CButton, CCard, CCardBody, CCardGroup, CCol, CContainer, CForm, CFormInput, CInputGroup, CInputGroupText, CRow } from "@coreui/react";
// // import { FaUser, FaLock } from "react-icons/fa";
// // import axios from "axios";
// // import Swal from 'sweetalert2';
// // import withReactContent from 'sweetalert2-react-content';
// // import styles from "./Register.module.css";

// // const MySwal = withReactContent(Swal); // sweetalert2 modal

// // const Register = () => {
// //   const [formData, setFormData] = useState({
// //     name: "",
// //     surnames: "",
// //     id: "",
// //     email: "",
// //     password: "",
// //     userType: ""
// //   });

// //   const [errors, setErrors] = useState({});

// //   const navigate = useNavigate();

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData((prevData) => ({
// //       ...prevData,
// //       [name]: value
// //     }));
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     // Verifica si algún campo obligatorio está vacío
// //     if (!formData.name || !formData.surnames || !formData.id || !formData.email || !formData.password || !formData.userType) {
// //       MySwal.fire({
// //         title: 'Error',
// //         text: 'Todos los campos son obligatorios.',
// //         icon: 'error',
// //         confirmButtonText: 'Aceptar'
// //       });
// //       return;
// //     }

// //      // Client-side validation (optional, but improves user experience)
// //      const validationErrors = {};
// //      if (!formData.id) {
// //        validationErrors.name = "El número de id es obligatorio.";
// //      }
// //      if (!formData.name) {
// //        validationErrors.name = "El nombre es obligatorio.";
// //      }
// //      if (!formData.surnames) {
// //        validationErrors.surnames = "Los apellidos son obligatorios.";
// //      }
// //      if (!formData.email) {
// //        validationErrors.surnames = "El email es obligatorio.";
// //      }
// //      if (!formData.userType) {
// //        validationErrors.surnames = "Este campo es obligatorio.";
// //      }
// //      // ... Add validations for other fields

// //      if (Object.keys(validationErrors).length > 0) {
// //        setErrors(validationErrors);
// //        return; // Don't submit if there are validation errors
// //      }

// //     try {
// //       const response = await axios.post("http://localhost:3001/users", formData);

// //       if (response.status >= 200 && response.status < 300) {
// //         MySwal.fire({
// //           title: '¡Usuario creado!',
// //           text: 'Tu cuenta ha sido creada exitosamente.',
// //           timer: 8000,
// //           icon: 'success',
// //           confirmButtonText: 'Aceptar'
// //         }).then(() => {
// //           setFormData({
// //             name: "",
// //             surnames: "",
// //             id: "",
// //             email: "",
// //             password: "",
// //             userType: ""
// //           });
// //           navigate("/login");
// //         });
// //       } else {
// //         throw new Error("Error al crear el usuario");
// //       }
// //     } catch (error) {
// //       MySwal.fire({
// //         title: 'Error',
// //         text: 'Hubo un problema al crear tu cuenta. Por favor, intenta nuevamente.',
// //         icon: 'error',
// //         confirmButtonText: 'Aceptar'
// //       });
// //       console.error("Error:", error);
// //     }
// //   };

// //   return (
// //     <div className={styles.registerBackground}>
// //       <CContainer>
// //         <CRow className="justify-content-center">
// //           <CCol md={10}>
// //             <CCardGroup className={styles.cardGroup}>
// //               <CCard className={`p-4 ${styles.card}`}>
// //                 <CCardBody>
// //                   <CForm onSubmit={handleSubmit}>
// //                     <h1 className={styles.registerTitle}>Regístrate</h1>
// //                     <p className={styles.registerSubtitle}>Crea una cuenta</p>
// //                     <CInputGroup className="mb-3">
// //                       <CInputGroupText>
// //                         C.C.
// //                       </CInputGroupText>
// //                       <CFormInput
// //                         name="id"
// //                         value={formData.id}
// //                         onChange={handleChange}
// //                         placeholder="Número de identificación"
// //                         autoComplete="username"
// //                         required
// //                       />
// //                     </CInputGroup>
// //                     <CInputGroup className="mb-3">
// //                       <CInputGroupText>
// //                         <FaUser className={styles.smokyGray} />
// //                       </CInputGroupText>
// //                       <CFormInput
// //                         name="name"
// //                         value={formData.name}
// //                         onChange={handleChange}
// //                         placeholder="Nombre(s)"
// //                         autoComplete="username"
// //                         required
// //                       />
// //                     </CInputGroup>
// //                     <CInputGroup className="mb-3">
// //                       <CInputGroupText>
// //                         <FaUser className={styles.smokyGray} />
// //                       </CInputGroupText>
// //                       <CFormInput
// //                         name="surnames"
// //                         value={formData.surnames}
// //                         onChange={handleChange}
// //                         placeholder="Apellidos"
// //                         autoComplete="username"
// //                         required
// //                       />
// //                     </CInputGroup>
// //                     <CInputGroup className="mb-3">
// //                       <CInputGroupText>
// //                         @
// //                       </CInputGroupText>
// //                       <CFormInput
// //                         name="email"
// //                         value={formData.email}
// //                         onChange={handleChange}
// //                         placeholder="Email"
// //                         autoComplete="email"
// //                         required
// //                       />
// //                     </CInputGroup>
// //                     <CInputGroup className="mb-3">
// //                       <CInputGroupText>
// //                         <FaUser className={styles.smokyGray} />
// //                       </CInputGroupText>
// //                       <select
// //                         name="userType"
// //                         value={formData.userType}
// //                         onChange={handleChange}
// //                         className={styles.selectInput}
// //                         required
// //                       >
// //                         <option value="">Selecciona el tipo de usuario</option>
// //                         <option value="productor">Productor</option>
// //                         <option value="tendero">Tendero</option>
// //                       </select>
// //                     </CInputGroup>
// //                     <CInputGroup className="mb-4">
// //                       <CInputGroupText>
// //                         <FaLock className={styles.smokyGray} />
// //                       </CInputGroupText>
// //                       <CFormInput
// //                         type="password"
// //                         name="password"
// //                         value={formData.password}
// //                         onChange={handleChange}
// //                         placeholder="Contraseña"
// //                         autoComplete="current-password"
// //                       />
// //                     </CInputGroup>
// //                     <div className="d-grid">
// //                       <CButton type="submit" color="success">Crea tu cuenta</CButton>
// //                     </div>
// //                     <div>
// //                       <p className={styles.loginLink}>¿Ya tienes cuenta? <Link to="/login" className={styles.login}>Inicia sesión</Link></p>
// //                     </div>
// //                   </CForm>
// //                 </CCardBody>
// //               </CCard>
// //             </CCardGroup>
// //           </CCol>
// //         </CRow>
// //       </CContainer>
// //     </div>
// //   );
// // };

// // export default Register;



// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import {
//   CButton,
//   CCard,
//   CCardBody,
//   CCardGroup,
//   CCol,
//   CContainer,
//   CForm,
//   CFormInput,
//   CInputGroup,
//   CInputGroupText,
//   CRow,
// } from "@coreui/react";
// import { FaUser, FaLock } from "react-icons/fa";
// import axios from "axios";
// import Swal from "sweetalert2";
// import withReactContent from "sweetalert2-react-content";
// import { useAuth0 } from "@auth0/auth0-react";
// import { FaGoogle } from "react-icons/fa";

// import styles from "./Register.module.css";

// const MySwal = withReactContent(Swal); // sweetalert2 modal

// const Register = () => {
//   const { loginWithRedirect } = useAuth0();

//   const [formData, setFormData] = useState({
//     name: "",
//     surnames: "",
//     id: "",
//     email: "",
//     password: "",
//     userType: "",
//   });

//   const [errors, setErrors] = useState({}); // State for error messages

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//     // Clear any existing error for the changed field
//     setErrors((prevErrors) => ({ ...prevErrors, [name]: null }));
//   };

  
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Client-side validation (optional, but improves user experience)
//     const validationErrors = {};
//     if (!formData.id) {
//       validationErrors.id = "El id es obligatorio.";
//     }
//     if (!formData.name) {
//       validationErrors.name = "El nombre es obligatorio.";
//     }
//     if (!formData.surnames) {
//       validationErrors.surnames = "Los apellidos son obligatorios.";
//     }
//     if (!formData.email) {
//       validationErrors.email = "EL email es obligatorio.";
//     }
//     if (!formData.userType) {
//       validationErrors.userType = "Debe escoger una opción.";
//     }
//     if (!formData.password) {
//       validationErrors.password = "Debe escribir una contraseña.";
//     }
//     // Add validations for other fields

//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//       return; // Don't submit if there are validation errors
//     }

//     try {
//       const response = await axios.post(
//         "http://localhost:3001/users",
//         formData
//       );

//       if (response.status >= 200 && response.status < 300) {
//         MySwal.fire({
//           title: "¡Usuario creado!",
//           text: "Tu cuenta ha sido creada exitosamente.",
//           timer: 8000,
//           icon: "success",
//           confirmButtonText: "Aceptar",
//         }).then(() => {
//           setFormData({
//             name: "",
//             surnames: "",
//             id: "",
//             email: "",
//             password: "",
//             userType: "",
//           });
//           navigate("/login");
//         });
//       } else {
//         throw new Error("Error al crear el usuario");
        
//       }
//     } catch (error) {
//       if (error.response && error.response.status === 400) {
//         // Usuario ya existe
//         MySwal.fire({
//           title: "Info",
//           text: "El CC o correo electrónico ya están en uso. Por favor, intenta con otro.",
//           icon: "info",
//           confirmButtonText: "Aceptar",
//         });
//       } else {
//         // Otro error
//         MySwal.fire({
//           title: "Error",
//           text: "Hubo un problema al crear tu cuenta. Por favor, intenta nuevamente.",
//           icon: "error",
//           confirmButtonText: "Aceptar",
//         });
//       }
//       console.error("Error:", error);
//     }
//   };
//   const handleAuth0Login = () => {
//     loginWithRedirect(); // Redirige al formulario de inicio de sesión de Auth0
//   };

//   return (
//     <div className={styles.registerBackground}>
//       <CContainer>
//         <CRow className="justify-content-center">
//           <CCol md={10}>
//             <CCardGroup className={styles.cardGroup}>
//               <CCard className={`p-4 ${styles.card}`}>
//                 <CCardBody>
//                   <CForm onSubmit={handleSubmit}>
//                     <h1 className={styles.registerTitle}>Regístrate</h1>
//                     <p className={styles.registerSubtitle}>Crea una cuenta</p>
//                     <CInputGroup className="mb-3">
//                       <CInputGroupText>C.C.</CInputGroupText>
//                       <CFormInput
//                         name="id"
//                         value={formData.id}
//                         onChange={handleChange}
//                         placeholder="Número de identificación"
//                         autoComplete="username"
//                         required
//                       />
//                     </CInputGroup>
//                     {errors.id && (
//                       <div className="text-danger">{errors.id}</div>
//                     )}
//                     <CInputGroup className="mb-3">
//                       <CInputGroupText>
//                         <FaUser className={styles.smokyGray} />
//                       </CInputGroupText>
//                       <CFormInput
//                         name="name"
//                         value={formData.name}
//                         onChange={handleChange}
//                         placeholder="Nombre(s)"
//                         autoComplete="username"
//                         required
//                       />
//                     </CInputGroup>
//                     {errors.name && (
//                       <div className="text-danger">{errors.name}</div>
//                     )}
//                     <CInputGroup className="mb-3">
//                       <CInputGroupText>
//                         <FaUser className={styles.smokyGray} />
//                       </CInputGroupText>
//                       <CFormInput
//                         name="surnames"
//                         value={formData.surnames}
//                         onChange={handleChange}
//                         placeholder="Apellidos"
//                         autoComplete="username"
//                         required
//                       />
//                     </CInputGroup>
//                     {errors.surnames && (
//                       <div className="text-danger">{errors.surnames}</div>
//                     )}
//                     {/* Add similar error display for other fields */}
//                     <CInputGroup className="mb-3">
//                       <CInputGroupText>@</CInputGroupText>
//                       <CFormInput
//                         name="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         placeholder="Email"
//                         autoComplete="email"
//                         required
//                       />
//                     </CInputGroup>
//                     <CInputGroup className="mb-3">
//                       <CInputGroupText>
//                         <FaUser className={styles.smokyGray} />
//                       </CInputGroupText>
//                       <select
//                         name="userType"
//                         value={formData.userType}
//                         onChange={handleChange}
//                         className={styles.selectInput}
//                         required
//                       >
//                         <option value="">Selecciona el tipo de usuario</option>
//                         <option value="productor">Productor</option>
//                         <option value="tendero">Tendero</option>
//                       </select>
//                     </CInputGroup>
//                     <CInputGroup className="mb-4">
//                       <CInputGroupText>
//                         <FaLock className={styles.smokyGray} />
//                       </CInputGroupText>
//                       <CFormInput
//                         type="password"
//                         name="password"
//                         value={formData.password}
//                         onChange={handleChange}
//                         placeholder="Contraseña"
//                         autoComplete="current-password"
//                         required
//                       />
//                     </CInputGroup>

//                     <CButton onClick={handleAuth0Login} color="primary">
//                       <FaGoogle /> Inicia sesión con Google
//                     </CButton>

//                     <div className="d-grid">
//                       <CButton type="submit" color="success">
//                         Crea tu cuenta
//                       </CButton>
//                     </div>
//                     <div>
//                       <p className={styles.loginLink}>
//                         ¿Ya tienes cuenta?{" "}
//                         <Link to="/login" className={styles.login}>
//                           Inicia sesión
//                         </Link>
//                       </p>
//                     </div>
//                   </CForm>
//                 </CCardBody>
//               </CCard>
//             </CCardGroup>
//           </CCol>
//         </CRow>
//       </CContainer>
//     </div>
//   );
// };

// export default Register;


// import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import {
//   CButton,
//   CCard,
//   CCardBody,
//   CCardGroup,
//   CCol,
//   CContainer,
//   CForm,
//   CFormInput,
//   CInputGroup,
//   CInputGroupText,
//   CRow,
// } from "@coreui/react";
// import { FaUser, FaLock, FaGoogle } from "react-icons/fa";
// import axios from "axios";
// import Swal from "sweetalert2";
// import withReactContent from "sweetalert2-react-content";
// import { useAuth0 } from "@auth0/auth0-react";

// import styles from "./Register.module.css";

// const MySwal = withReactContent(Swal);

// const Register = () => {
//   const { loginWithRedirect, user, isAuthenticated, getAccessTokenSilently } = useAuth0();
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     name: "",
//     surnames: "",
//     id: "",
//     email: "",
//     password: "",
//     userType: "",
//   });

//   const [errors, setErrors] = useState({});

//   useEffect(() => {
//     if (isAuthenticated && user) {
//       setFormData((prevData) => ({
//         ...prevData,
//         name: user.given_name || "",
//         surnames: user.family_name || "",
//         email: user.email || "",
//       }));
//     }
//   }, [isAuthenticated, user]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//     setErrors((prevErrors) => ({ ...prevErrors, [name]: null }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const validationErrors = {};
//     if (!formData.id) {
//       validationErrors.id = "El id es obligatorio.";
//     }
//     if (!formData.name) {
//       validationErrors.name = "El nombre es obligatorio.";
//     }
//     if (!formData.surnames) {
//       validationErrors.surnames = "Los apellidos son obligatorios.";
//     }
//     if (!formData.email) {
//       validationErrors.email = "El email es obligatorio.";
//     }
//     if (!formData.userType) {
//       validationErrors.userType = "Debe escoger una opción.";
//     }
//     if (!formData.password) {
//       validationErrors.password = "Debe escribir una contraseña.";
//     }

//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//       return;
//     }

//     try {
//       const token = await getAccessTokenSilently();
//       const response = await axios.post(
//         "http://localhost:3001/users",
//         formData,
//         { headers: { Authorization: `Bearer ${token}` } }
//       );

//       if (response.status >= 200 && response.status < 300) {
//         MySwal.fire({
//           title: "¡Usuario creado!",
//           text: "Tu cuenta ha sido creada exitosamente.",
//           timer: 8000,
//           icon: "success",
//           confirmButtonText: "Aceptar",
//         }).then(() => {
//           setFormData({
//             name: "",
//             surnames: "",
//             id: "",
//             email: "",
//             password: "",
//             userType: "",
//           });
//           navigate("/login");
//         });
//       } else {
//         throw new Error("Error al crear el usuario");
//       }
//     } catch (error) {
//       if (error.response && error.response.status === 400) {
//         MySwal.fire({
//           title: "Info",
//           text: "El CC o correo electrónico ya están en uso. Por favor, intenta con otro.",
//           icon: "info",
//           confirmButtonText: "Aceptar",
//         });
//       } else {
//         MySwal.fire({
//           title: "Error",
//           text: "Hubo un problema al crear tu cuenta. Por favor, intenta nuevamente.",
//           icon: "error",
//           confirmButtonText: "Aceptar",
//         });
//       }
//       console.error("Error:", error);
//     }
//   };

//   const handleAuth0Login = () => {
//     loginWithRedirect({
//       redirectUri: window.location.origin + "/register", // Asegúrate de configurar esta URL en Auth0
//     });
//   };

//   return (
//     <div className={styles.registerBackground}>
//       <CContainer>
//         <CRow className="justify-content-center">
//           <CCol md={10}>
//             <CCardGroup className={styles.cardGroup}>
//               <CCard className={`p-4 ${styles.card}`}>
//                 <CCardBody>
//                   <CForm onSubmit={handleSubmit}>
//                     <h1 className={styles.registerTitle}>Regístrate</h1>
//                     <p className={styles.registerSubtitle}>Crea una cuenta</p>
//                     <CInputGroup className="mb-3">
//                       <CInputGroupText>C.C.</CInputGroupText>
//                       <CFormInput
//                         name="id"
//                         value={formData.id}
//                         onChange={handleChange}
//                         placeholder="Número de identificación"
//                         autoComplete="username"
//                         required
//                       />
//                     </CInputGroup>
//                     {errors.id && (
//                       <div className="text-danger">{errors.id}</div>
//                     )}
//                     <CInputGroup className="mb-3">
//                       <CInputGroupText>
//                         <FaUser className={styles.smokyGray} />
//                       </CInputGroupText>
//                       <CFormInput
//                         name="name"
//                         value={formData.name}
//                         onChange={handleChange}
//                         placeholder="Nombre(s)"
//                         autoComplete="username"
//                         required
//                       />
//                     </CInputGroup>
//                     {errors.name && (
//                       <div className="text-danger">{errors.name}</div>
//                     )}
//                     <CInputGroup className="mb-3">
//                       <CInputGroupText>
//                         <FaUser className={styles.smokyGray} />
//                       </CInputGroupText>
//                       <CFormInput
//                         name="surnames"
//                         value={formData.surnames}
//                         onChange={handleChange}
//                         placeholder="Apellidos"
//                         autoComplete="username"
//                         required
//                       />
//                     </CInputGroup>
//                     {errors.surnames && (
//                       <div className="text-danger">{errors.surnames}</div>
//                     )}
//                     <CInputGroup className="mb-3">
//                       <CInputGroupText>@</CInputGroupText>
//                       <CFormInput
//                         name="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         placeholder="Email"
//                         autoComplete="email"
//                         required
//                       />
//                     </CInputGroup>
//                     <CInputGroup className="mb-3">
//                       <CInputGroupText>
//                         <FaUser className={styles.smokyGray} />
//                       </CInputGroupText>
//                       <select
//                         name="userType"
//                         value={formData.userType}
//                         onChange={handleChange}
//                         className={styles.selectInput}
//                         required
//                       >
//                         <option value="">Selecciona el tipo de usuario</option>
//                         <option value="productor">Productor</option>
//                         <option value="tendero">Tendero</option>
//                       </select>
//                     </CInputGroup>
//                     <CInputGroup className="mb-4">
//                       <CInputGroupText>
//                         <FaLock className={styles.smokyGray} />
//                       </CInputGroupText>
//                       <CFormInput
//                         type="password"
//                         name="password"
//                         value={formData.password}
//                         onChange={handleChange}
//                         placeholder="Contraseña"
//                         autoComplete="current-password"
//                         required
//                       />
//                     </CInputGroup>

//                     <CButton onClick={handleAuth0Login} color="primary" className="mb-3">
//                       <FaGoogle /> Inicia sesión con Google
//                     </CButton>

//                     <div className="d-grid">
//                       <CButton type="submit" color="success">
//                         Crea tu cuenta
//                       </CButton>
//                     </div>
//                     <div>
//                       <p className={styles.loginLink}>
//                         ¿Ya tienes cuenta?{" "}
//                         <Link to="/login" className={styles.login}>
//                           Inicia sesión
//                         </Link>
//                       </p>
//                     </div>
//                   </CForm>
//                 </CCardBody>
//               </CCard>
//             </CCardGroup>
//           </CCol>
//         </CRow>
//       </CContainer>
//     </div>
//   );
// };

// export default Register;


// import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import {
//   CButton,
//   CCard,
//   CCardBody,
//   CCardGroup,
//   CCol,
//   CContainer,
//   CForm,
//   CFormInput,
//   CInputGroup,
//   CInputGroupText,
//   CRow,
// } from "@coreui/react";
// import { FaUser, FaLock, FaGoogle } from "react-icons/fa";
// import axios from "axios";
// import Swal from "sweetalert2";
// import withReactContent from "sweetalert2-react-content";
// import { useAuth0 } from "@auth0/auth0-react";

// import styles from "./Register.module.css";

// const MySwal = withReactContent(Swal);

// const Register = () => {
//   const { loginWithRedirect, user, isAuthenticated, getAccessTokenSilently } = useAuth0();
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     name: "",
//     surnames: "",
//     id: "",
//     email: "",
//     password: "",
//     userType: "",
//   });

//   const [errors, setErrors] = useState({});

//   useEffect(() => {
//     if (isAuthenticated && user) {
//       console.log("User authenticated:", user);
//       setFormData((prevData) => ({
//         ...prevData,
//         name: user.given_name || "",
//         surnames: user.family_name || "",
//         email: user.email || "",
//       }));
//     }
//   }, [isAuthenticated, user]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//     setErrors((prevErrors) => ({ ...prevErrors, [name]: null }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const validationErrors = {};
//     if (!formData.id) {
//       validationErrors.id = "El id es obligatorio.";
//     }
//     if (!formData.name) {
//       validationErrors.name = "El nombre es obligatorio.";
//     }
//     if (!formData.surnames) {
//       validationErrors.surnames = "Los apellidos son obligatorios.";
//     }
//     if (!formData.email) {
//       validationErrors.email = "El email es obligatorio.";
//     }
//     if (!formData.userType) {
//       validationErrors.userType = "Debe escoger una opción.";
//     }
//     if (!formData.password) {
//       validationErrors.password = "Debe escribir una contraseña.";
//     }

//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//       return;
//     }

//     try {
//       const token = await getAccessTokenSilently();
//       const response = await axios.post(
//         "http://localhost:3001/users",
//         formData,
//         { headers: { Authorization: `Bearer ${token}` } }
//       );

//       if (response.status >= 200 && response.status < 300) {
//         MySwal.fire({
//           title: "¡Usuario creado!",
//           text: "Tu cuenta ha sido creada exitosamente.",
//           timer: 8000,
//           icon: "success",
//           confirmButtonText: "Aceptar",
//         }).then(() => {
//           setFormData({
//             name: "",
//             surnames: "",
//             id: "",
//             email: "",
//             password: "",
//             userType: "",
//           });
//           navigate("/login");
//         });
//       } else {
//         throw new Error("Error al crear el usuario");
//       }
//     } catch (error) {
//       if (error.response && error.response.status === 400) {
//         MySwal.fire({
//           title: "Info",
//           text: "El CC o correo electrónico ya están en uso. Por favor, intenta con otro.",
//           icon: "info",
//           confirmButtonText: "Aceptar",
//         });
//       } else {
//         MySwal.fire({
//           title: "Error",
//           text: "Hubo un problema al crear tu cuenta. Por favor, intenta nuevamente.",
//           icon: "error",
//           confirmButtonText: "Aceptar",
//         });
//       }
//       console.error("Error:", error);
//     }
//   };

//   const handleAuth0Login = () => {
//     console.log("Auth0 login initiated");
//     loginWithRedirect({
//       authorizationParams: {
//         redirect_uri: `${window.location.origin}/register`,
//       },
//     });
//   };

//   useEffect(() => {
//     if (isAuthenticated) {
//       console.log("User data after redirect:", user);
//     }
//   }, [isAuthenticated]);

//   return (
//     <div className={styles.registerBackground}>
//       <CContainer>
//         <CRow className="justify-content-center">
//           <CCol md={10}>
//             <CCardGroup className={styles.cardGroup}>
//               <CCard className={`p-4 ${styles.card}`}>
//                 <CCardBody>
//                   <CForm onSubmit={handleSubmit}>
//                     <h1 className={styles.registerTitle}>Regístrate</h1>
//                     <p className={styles.registerSubtitle}>Crea una cuenta</p>
//                     <CInputGroup className="mb-3">
//                       <CInputGroupText>C.C.</CInputGroupText>
//                       <CFormInput
//                         name="id"
//                         value={formData.id}
//                         onChange={handleChange}
//                         placeholder="Número de identificación"
//                         autoComplete="username"
//                         required
//                       />
//                     </CInputGroup>
//                     {errors.id && (
//                       <div className="text-danger">{errors.id}</div>
//                     )}
//                     <CInputGroup className="mb-3">
//                       <CInputGroupText>
//                         <FaUser className={styles.smokyGray} />
//                       </CInputGroupText>
//                       <CFormInput
//                         name="name"
//                         value={formData.name}
//                         onChange={handleChange}
//                         placeholder="Nombre(s)"
//                         autoComplete="username"
//                         required
//                       />
//                     </CInputGroup>
//                     {errors.name && (
//                       <div className="text-danger">{errors.name}</div>
//                     )}
//                     <CInputGroup className="mb-3">
//                       <CInputGroupText>
//                         <FaUser className={styles.smokyGray} />
//                       </CInputGroupText>
//                       <CFormInput
//                         name="surnames"
//                         value={formData.surnames}
//                         onChange={handleChange}
//                         placeholder="Apellidos"
//                         autoComplete="username"
//                         required
//                       />
//                     </CInputGroup>
//                     {errors.surnames && (
//                       <div className="text-danger">{errors.surnames}</div>
//                     )}
//                     <CInputGroup className="mb-3">
//                       <CInputGroupText>@</CInputGroupText>
//                       <CFormInput
//                         name="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         placeholder="Email"
//                         autoComplete="email"
//                         required
//                       />
//                     </CInputGroup>
//                     <CInputGroup className="mb-3">
//                       <CInputGroupText>
//                         <FaUser className={styles.smokyGray} />
//                       </CInputGroupText>
//                       <select
//                         name="userType"
//                         value={formData.userType}
//                         onChange={handleChange}
//                         className={styles.selectInput}
//                         required
//                       >
//                         <option value="">Selecciona el tipo de usuario</option>
//                         <option value="productor">Productor</option>
//                         <option value="tendero">Tendero</option>
//                       </select>
//                     </CInputGroup>
//                     <CInputGroup className="mb-4">
//                       <CInputGroupText>
//                         <FaLock className={styles.smokyGray} />
//                       </CInputGroupText>
//                       <CFormInput
//                         type="password"
//                         name="password"
//                         value={formData.password}
//                         onChange={handleChange}
//                         placeholder="Contraseña"
//                         autoComplete="current-password"
//                         required
//                       />
//                     </CInputGroup>

//                     <CButton onClick={handleAuth0Login} color="primary" className="mb-3">
//                       <FaGoogle /> Inicia sesión con Google
//                     </CButton>

//                     <div className="d-grid">
//                       <CButton type="submit" color="success">
//                         Crea tu cuenta
//                       </CButton>
//                     </div>
//                     <div>
//                       <p className={styles.loginLink}>
//                         ¿Ya tienes cuenta?{" "}
//                         <Link to="/login" className={styles.login}>
//                           Inicia sesión
//                         </Link>
//                       </p>
//                     </div>
//                   </CForm>
//                 </CCardBody>
//               </CCard>
//             </CCardGroup>
//           </CCol>
//         </CRow>
//       </CContainer>
//     </div>
//   );
// };

// export default Register;

import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from "@coreui/react";
import { FaUser, FaLock, FaGoogle } from "react-icons/fa";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useAuth0 } from "@auth0/auth0-react";

import styles from "./Register.module.css";

const MySwal = withReactContent(Swal);

const Register = () => {
  const { loginWithRedirect, user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    surnames: "",
    id: "",
    email: "",
    password: "",
    userType: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (isAuthenticated && user) {
      console.log("User authenticated:", user);
      setFormData((prevData) => ({
        ...prevData,
        name: user.given_name || "",
        surnames: user.family_name || "",
        email: user.email || "",
      }));
    }
  }, [isAuthenticated, user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: null }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = {};
    if (!formData.id) {
      validationErrors.id = "El id es obligatorio.";
    }
    if (!formData.name) {
      validationErrors.name = "El nombre es obligatorio.";
    }
    if (!formData.surnames) {
      validationErrors.surnames = "Los apellidos son obligatorios.";
    }
    if (!formData.email) {
      validationErrors.email = "El email es obligatorio.";
    }
    if (!formData.userType) {
      validationErrors.userType = "Debe escoger una opción.";
    }
    if (!formData.password) {
      validationErrors.password = "Debe escribir una contraseña.";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const token = await getAccessTokenSilently();
      const response = await axios.post(
        "http://localhost:3001/users",
        formData,
        { headers: { Authorization: `Bearer ${token}` } }
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
            name: "",
            surnames: "",
            id: "",
            email: "",
            password: "",
            userType: "",
          });
          navigate("/login");
        });
      } else {
        throw new Error("Error al crear el usuario");
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        MySwal.fire({
          title: "Info",
          text: "El CC o correo electrónico ya están en uso. Por favor, intenta con otro.",
          icon: "info",
          confirmButtonText: "Aceptar",
        });
      } else {
        MySwal.fire({
          title: "Error",
          text: "Hubo un problema al crear tu cuenta. Por favor, intenta nuevamente.",
          icon: "error",
          confirmButtonText: "Aceptar",
        });
      }
      console.error("Error:", error);
    }
  };

  const handleAuth0Login = () => {
    console.log("Auth0 login initiated");
    loginWithRedirect({
      authorizationParams: {
        redirect_uri: `${window.location.origin}/register`,
      },
    });
  };

  return (
    <div className={styles.registerBackground}>
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={10}>
            <CCardGroup className={styles.cardGroup}>
              <CCard className={`p-4 ${styles.card}`}>
                <CCardBody>
                  <CForm onSubmit={handleSubmit}>
                    <h1 className={styles.registerTitle}>Regístrate</h1>
                    <p className={styles.registerSubtitle}>Crea una cuenta</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>C.C.</CInputGroupText>
                      <CFormInput
                        name="id"
                        value={formData.id}
                        onChange={handleChange}
                        placeholder="Número de identificación"
                        autoComplete="username"
                        required
                      />
                    </CInputGroup>
                    {errors.id && (
                      <div className="text-danger">{errors.id}</div>
                    )}
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <FaUser className={styles.smokyGray} />
                      </CInputGroupText>
                      <CFormInput
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Nombre(s)"
                        autoComplete="username"
                        required
                      />
                    </CInputGroup>
                    {errors.name && (
                      <div className="text-danger">{errors.name}</div>
                    )}
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <FaUser className={styles.smokyGray} />
                      </CInputGroupText>
                      <CFormInput
                        name="surnames"
                        value={formData.surnames}
                        onChange={handleChange}
                        placeholder="Apellidos"
                        autoComplete="username"
                        required
                      />
                    </CInputGroup>
                    {errors.surnames && (
                      <div className="text-danger">{errors.surnames}</div>
                    )}
                    <CInputGroup className="mb-3">
                      <CInputGroupText>@</CInputGroupText>
                      <CFormInput
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        autoComplete="email"
                        required
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <FaUser className={styles.smokyGray} />
                      </CInputGroupText>
                      <select
                        name="userType"
                        value={formData.userType}
                        onChange={handleChange}
                        className={styles.selectInput}
                        required
                      >
                        <option value="">Selecciona el tipo de usuario</option>
                        <option value="productor">Productor</option>
                        <option value="tendero">Tendero</option>
                      </select>
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <FaLock className={styles.smokyGray} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Contraseña"
                        autoComplete="current-password"
                        required
                      />
                    </CInputGroup>

                    <CButton onClick={handleAuth0Login} color="primary" className="mb-3">
                      <FaGoogle /> Inicia sesión con Google
                    </CButton>

                    <div className="d-grid">
                      <CButton type="submit" color="success">
                        Crea tu cuenta
                      </CButton>
                    </div>
                    <div>
                      <p className={styles.loginLink}>
                        ¿Ya tienes cuenta?{" "}
                        <Link to="/login" className={styles.login}>
                          Inicia sesión
                        </Link>
                      </p>
                    </div>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Register;
