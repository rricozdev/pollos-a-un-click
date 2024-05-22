import React from "react";
import { Link } from "react-router-dom";
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
import styles from "./Login.module.css";

const Login = () => {
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
                        placeholder="Contraseña"
                        autoComplete="current-password"
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>
                        <CButton
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
