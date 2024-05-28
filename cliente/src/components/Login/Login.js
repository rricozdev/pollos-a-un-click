import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Bounce, Fade } from "react-awesome-reveal";
import { FaGoogle } from "react-icons/fa";
import styles from "./Login.module.css";
import Logo from "./LogoPaunC2.png";

const Login = () => {
  const { loginWithRedirect } = useAuth0();

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

        <p className={styles.loginDescription}>
          Para una experiencia segura y sin complicaciones, te recomendamos
          iniciar sesión con tu cuenta de Google.
        </p>
        <button
          className={styles.googleBtn}
          onClick={() => loginWithRedirect({ connection: "google-oauth2" })}
        >
          <FaGoogle className={styles.googleIcon} /> Login with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
