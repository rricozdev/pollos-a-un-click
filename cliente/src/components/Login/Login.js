// import React from "react";
// import { useAuth0 } from "@auth0/auth0-react";

// const Login = () => {
//   const { loginWithRedirect, isAuthenticated } = useAuth0();

//   console.log(`status de la autenticación: ${isAuthenticated}`);
//   return <button onClick={() => loginWithRedirect()}>Login</button>;
// };

// export default Login;

// import React, { useState } from "react";
// import { useAuth0 } from "@auth0/auth0-react";
// import styles from "./Login.module.css"; // Importa el CSS Module
// import Logo from "./LogoPaunC.png";

// const Login = () => {
//   const { loginWithRedirect, isAuthenticated } = useAuth0();
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = () => {
//     // Aquí podrías usar los valores de username y password
//     loginWithRedirect();
//   };

//   console.log(`status de la autenticación: ${isAuthenticated}`);
//   return (
//     <div className={styles.container}>
//       <div>
//         <img src={Logo} alt="Pollos a un click." className={styles.logo} />
//         <h2 className={styles.subtitle}>
//           Conecta con los productores locales{" "}
//         </h2>
//         <p className={styles.description}>
//           Facilitamos la compra y pedido de pollos en tu área, eliminando
//           intermediarios y asegurando siempre la demanda justa sin
//           sobreproducción.
//         </p>
//       </div>
//       <div className={styles.loginBox}>
//         <h2 className={styles.loginTitle}>Iniciar Sesión</h2>
//         <input
//           type="text"
//           placeholder="Correo electrónico o teléfono"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           className={styles.inputField}
//         />
//         <input
//           type="password"
//           placeholder="Contraseña"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           className={styles.inputField}
//         />
//         <button className={styles.loginButton} onClick={handleLogin}>
//           Entrar
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Login;

// Funciona de maravilla
// import React, { useState } from "react";
// import { useAuth0 } from "@auth0/auth0-react";
// import { Bounce, Fade } from "react-awesome-reveal";
// import styles from "./Login.module.css"; // Importa el CSS Module
// import Logo from "./LogoPaunC2.png";

// const Login = () => {
//   const { loginWithRedirect, isAuthenticated } = useAuth0();
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = () => {
//     // Aquí podrías usar los valores de username y password
//     loginWithRedirect();
//   };

//   console.log(`status de la autenticación: ${isAuthenticated}`);
//   return (
//     <div className={styles.container}>
//       <div className={styles.content}>
//         <Fade duration={6000}>
//           <img src={Logo} alt="Pollos a un click." className={styles.logo} />
//         </Fade>

//         <Bounce
//         duration={4000}
//         >
//           <h2 className={styles.subtitle}>
//             Conecta con los productores locales
//           </h2>
//         </Bounce>

//         <p className={styles.description}>
//           Facilitamos la compra y pedido de pollos en tu área, eliminando
//           intermediarios y asegurando siempre la demanda justa sin
//           sobreproducción.
//         </p>
//       </div>
//       <div className={styles.loginBox}>
//         <h2 className={styles.loginTitle}>Iniciar Sesión</h2>
//         <input
//           type="text"
//           placeholder="Correo electrónico o teléfono"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           className={styles.inputField}
//         />
//         <input
//           type="password"
//           placeholder="Contraseña"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           className={styles.inputField}
//         />
//         <button className={styles.loginButton} onClick={handleLogin}>
//           Login
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Bounce, Fade } from "react-awesome-reveal";
import { FaGoogle } from "react-icons/fa"; // Importa el icono de Google
import styles from "./Login.module.css"; // Importa el CSS Module
import Logo from "./LogoPaunC2.png";

const Login = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Aquí podrías usar los valores de username y password
    loginWithRedirect();
  };

  console.log(`status de la autenticación: ${isAuthenticated}`);
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
        <input
          type="text"
          placeholder="Correo electrónico"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className={styles.inputField}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.inputField}
        />
        <button className={styles.loginButton} onClick={handleLogin}>
          Login
        </button>
        <button className={styles.googleBtn} onClick={() => loginWithRedirect({ connection: 'google-oauth2' })}>
          <FaGoogle className={styles.googleIcon} />
          {" "}Login with Google
        </button>
      </div>
    </div>
  );
};

export default Login;

