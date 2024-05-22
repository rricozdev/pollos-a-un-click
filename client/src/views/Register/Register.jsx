// Register.jsx
import React, { useState } from 'react';
import styles from './Register.module.css';
// import { useNavigSate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';


const Register = () => {
    const [formData, setFormData] = useState({
        id: '',
        name: '',
        surnames: '',
        email: '',
        password: '',
        userType: 'productor', // Default to 'productor'
    });

    // const navigate = useNavigate();

    const handleChange = (e) => {S
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí iría la lógica para manejar el registro del usuario, como una solicitud a una API
        console.log(formData);
        // Redirigir al usuario después del registro
        navigate('/login');
    };

    return (
        <div className={styles.registerContainer}>
            <NavBar />
            <h2>Crear una cuenta</h2>
            <form className={styles.registerForm} onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                    <label htmlFor="id">Número de Identificación:</label>
                    <input type="text" id="id" name="id" value={formData.id} onChange={handleChange} />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="name">Nombre:</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="surnames">Apellidos:</label>
                    <input type="text" id="surnames" name="surnames" value={formData.surnames} onChange={handleChange} />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="email">Correo Electrónico:</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="password">Contraseña:</label>
                    <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="userType">Tipo de Usuario:</label>
                    <select id="userType" name="userType" value={formData.userType} onChange={handleChange}>
                        <option value="productor">Productor</option>
                        <option value="tendero">Tendero</option>
                    </select>
                </div>
                <button type="submit" className={styles.registerButton}>Registrarse</button>
            </form>
            <p className={styles.loginLink}>¿Ya estás registrado? <Link to="/login" className={styles.inicia}>Inicia Sesión</Link></p>
        </div>
    );
}

export default Register;
