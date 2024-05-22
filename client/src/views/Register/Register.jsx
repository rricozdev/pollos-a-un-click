import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CButton, CCard, CCardBody, CCardGroup, CCol, CContainer, CForm, CFormInput, CInputGroup, CInputGroupText, CRow } from "@coreui/react";
import { FaUser, FaLock } from "react-icons/fa";
import axios from "axios";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import styles from "./Register.module.css";

const MySwal = withReactContent(Swal); // sweetalert2 modal

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    surnames: "",
    id: "",
    email: "",
    password: "",
    userType: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001/users", formData);

      if (response.status >= 200 && response.status < 300) {
        MySwal.fire({
          title: '¡Usuario creado!',
          text: 'Tu cuenta ha sido creada exitosamente.',
          timer: 8000,
          icon: 'success',
          confirmButtonText: 'Aceptar'
        }).then(() => {
          setFormData({
            name: "",
            surnames: "",
            id: "",
            email: "",
            password: "",
            userType: ""
          });
          navigate("/login");
        });
      } else {
        throw new Error("Error al crear el usuario");
      }
    } catch (error) {
      MySwal.fire({
        title: 'Error',
        text: 'Hubo un problema al crear tu cuenta. Por favor, intenta nuevamente.',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
      console.error("Error:", error);
    }
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
                      <CInputGroupText>
                        C.C.
                      </CInputGroupText>
                      <CFormInput
                        name="id"
                        value={formData.id}
                        onChange={handleChange}
                        placeholder="Número de identificación"
                        autoComplete="username"
                      />
                    </CInputGroup>
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
                      />
                    </CInputGroup>
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
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        @
                      </CInputGroupText>
                      <CFormInput
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        autoComplete="email"
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
                      />
                    </CInputGroup>
                    <div className="d-grid">
                      <CButton type="submit" color="success">Crea tu cuenta</CButton>
                    </div>
                    <div>
                      <p className={styles.loginLink}>¿Ya tienes cuenta? <Link to="/login" className={styles.login}>Inicia sesión</Link></p>
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
