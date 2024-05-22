import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Login.module.css';
import NavBar from '../../components/NavBar/NavBar';

const Login = () => {
    return (
        <div className={styles.loginContainer}>
            <NavBar />
            <h2>Iniciar Sesión</h2>
            <form className={styles.loginForm}>
                <div className={styles.formGroup}>
                    <label htmlFor="id" className={styles.label}></label>
                    <input type="text" id="id" name="id" className={styles.input} placeholder="Número de Identificación" />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="password" className={styles.label}></label>
                    <input type="password" id="password" name="password" className={styles.input} placeholder="Contraseña" />
                </div>
                <button type="submit" className={styles.loginButton}>Iniciar Sesión</button>
            </form>
            <p className={styles.registerLink}>¿No estás registrado? <Link to="/register" className={styles.cuenta}>Crea una cuenta</Link></p>
<p className={styles.dashboardLink}>Haz clic aquí para ver el dashboard <Link to="/dashboard">Dashboard</Link></p>
        </div>
    );
}

export default Login;


// Login.jsx
// import React from 'react';
// import { Link } from 'react-router-dom';
// // import Dashboard from '../DashBoard/Sidebar'; // Importa el componente Dashboard
// import styles from './Login.module.css';

// const Login = () => {
//     const handleLogin = () => {
//         // Aquí deberías realizar la lógica de inicio de sesión
//         // Luego redirigir al usuario al Dashboard después del inicio de sesión
//         // Esto se puede hacer con useHistory o simplemente colocando el componente Dashboard aquí
//     }

//     return (
//         <div>
//             <h2>Inicio de Sesión</h2>
//             <button onClick={handleLogin}>Iniciar Sesión</button>
//             <p>¿No tienes una cuenta? <Link to="/register">Regístrate aquí</Link></p>
//             <p className={styles.dashboardLink}>Haz clic aquí para ver el dashboard <Link to="/dashboard">Dashboard</Link></p>
//         </div>
//     );
// }

// export default Login;
