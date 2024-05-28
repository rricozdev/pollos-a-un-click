import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Bounce, Fade } from "react-awesome-reveal";
import { FaGoogle } from "react-icons/fa";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import styles from "./Login.module.css";
import Logo from "./LogoPaunC2.png";

const MySwal = withReactContent(Swal);

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const Navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    // e.preventDefault();

   
      const response = await axios.post("http://localhost:3001/login", formData, { headers: {"Content-Type": "application/json"},
        }
      );

      if (response.status >= 200 && response.status < 300) {
        MySwal.fire({
          title: "Login exitoso!",
          text: "Tienes cuenta en Pollos a un click, tienes descuentos en las patas de pollo!.",
          timer: 8000,
          icon: "success",
          confirmButtonText: "Aceptar",
        }).then(() => {
          setFormData({
            email: "",
            password: "",
          });
          Navigate('/profile')
        });
      } else {
        throw new Error("Error al iniciar sesión!!!...opppps!!!");
      }
    
  };


  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Fade duration={6000}>
          <img src={Logo} alt="Pollos a un click." className={styles.logo} />
        </Fade>

        <Bounce duration={4000}>
          <h2 className={styles.subtitle}>
            Conecta con los productores locales
          </h2>
        </Bounce>

        <p className={styles.description}>
          Facilitamos la compra y pedido de pollos en tu área, eliminando
          intermediarios y asegurando siempre la demanda justa sin
          sobreproducción.
        </p>
      </div>
      <div className={styles.loginBox}>
        <h2 className={styles.loginTitle}>Iniciar Sesión</h2>

        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
          <label htmlFor="email"></label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="email"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password"></label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Contraseña"
              required
            />
          </div>
        </form>
        <button
          className={styles.googleBtn}
          onClick={() => handleSubmit()}
        >
          <FaGoogle className={styles.googleIcon} /> Login with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
