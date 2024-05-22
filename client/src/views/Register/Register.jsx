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
import styles from "./Register.module.css";

const Register = () => {
  return (
    <div className={styles.registerBackground}>
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={10}>
            <CCardGroup className={styles.cardGroup}>
              <CCard className={`p-4 ${styles.card}`}>
                <CCardBody>
                  <CForm>
                    <h1 className={styles.registerTitle}>Registrate</h1>
                    <p className={styles.registerSubtitle}>Crea una cuenta</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        C.C.
                      </CInputGroupText>
                      <CFormInput
                        placeholder="Número de identificación"
                        autoComplete="username"
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <FaUser className={styles.smokyGray} />
                      </CInputGroupText>
                      <CFormInput
                        placeholder="Nombre(s)"
                        autoComplete="username"
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <FaUser className={styles.smokyGray} />
                      </CInputGroupText>
                      <CFormInput
                        placeholder="Apellidos"
                        autoComplete="username"
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        @
                      </CInputGroupText>
                      <CFormInput
                        placeholder="Email"
                        autoComplete="email"
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <FaUser className={styles.smokyGray} />
                      </CInputGroupText>
                      <CFormInput
                        placeholder="Tipo de usuario"
                        autoComplete="username"
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <FaLock className={styles.smokyGray} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Contraseña"
                        autoComplete="current-password"
                      />
                    </CInputGroup>
                    <div className="d-grid">
                      <CButton color="success">Crea tu cuenta</CButton>
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
