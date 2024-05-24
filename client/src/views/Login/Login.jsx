import React, { useState } from "react";
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
import { FaUser, FaLock } from "react-icons/fa";
import axios from "axios"; // Importa Axios
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import styles from "./Login.module.css";
// import NavBar from "../../components/NavBar/NavBar";
const MySwal = withReactContent(Swal);

const Login = () => {
  const [formData, setFormData] = useState({
    id: "",
    password: "",
  });

  const navigate = useNavigate(); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:3001/login", formData); // Utiliza Axios para realizar la solicitud POST

      // Verifica si la respuesta es exitosa (código de estado 2xx)
      if (response.status >= 200 && response.status < 300) {
        // Muestra una alerta de éxito
        MySwal.fire({
          icon: 'success',
          title: '¡Inicio de sesión exitoso!',
          text: '¡Bienvenido de vuelta!',
          confirmButtonText: 'Ok'
        }).then(() => {
          // limpiamos el formulario
          setFormData({ id: "", password: "" });
          navigate("/dashboard");
        });
      } else {
        throw new Error("Error al iniciar sesión");
      }
    } catch (error) {
      console.error("Error:", error);
      // Muestra una alerta de error
      MySwal.fire({
        icon: 'error',
        title: 'Error al iniciar sesión',
        text: 'Por favor, verifica tus credenciales e intenta de nuevo.',
        confirmButtonText: 'Ok'
      });
    }
  };

  return (
    <div className={styles.loginBackground}>
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={10}>
            <CCardGroup className={styles.cardGroup}>
              <CCard className={`p-4 ${styles.card}`}>
                <CCardBody>
                  <CForm>
                    <h1 className={styles.loginTitle}>Iniciar Sesión</h1>
                    <p className={styles.loginSubtitle}>Ingresa a tu cuenta</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText >
                        <FaUser className={styles.smokyGray}/>
                      </CInputGroupText>
                      <CFormInput
                        name="id"
                        value={formData.id}
                        onChange={handleChange}
                        placeholder="Número de identificación"
                        autoComplete="username"
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <FaLock className={styles.smokyGray}/>
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Contraseña"
                        autoComplete="current-password"
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>
                        <CButton
                          onClick={handleLogin}
                          color="primary"
                          className={`px-3 ${styles.loginButton}`}
                        >
                          Iniciar Sesión
                        </CButton>
                      </CCol>
                      <CCol xs={6} className="text-right">
                        <button className={styles.forgotPassword}>
                          ¿Olvidaste tu contraseña?
                        </button>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className={`${styles.signupCard} ${styles.card}`}>
                <CCardBody className="text-center">
                  <div className={styles.centerVertically}>
                    <h2>Regístrate</h2>
                    <p>
                      Si no tienes una cuenta, regístrate ahora y empieza a
                      conectarte con los productores locales.
                    </p>
                    <Link to="/register" className={styles.registerButton}>
                      ¡Regístrate Ahora!
                    </Link>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Login;


