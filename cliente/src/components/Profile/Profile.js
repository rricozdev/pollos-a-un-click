import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { BallTriangle } from "react-loader-spinner";
import {
  FaUserCircle,
  FaCalendarAlt,
  FaFacebookMessenger,
  FaBox,
  FaClipboardCheck,
  FaChartLine,
} from "react-icons/fa";
import { MdArrowBackIos } from "react-icons/md";
import styles from "./Profile.module.css";
import TenderoPedidos from "../TenderoPedidos/TenderoPedidos"; // Importa el componente TenderoPedidos
import ProductorPedidos from "../ProductorPedidos/ProductorPedidos";

const MySwal = withReactContent(Swal);

const Profile = () => {
  const { user, isAuthenticated, getAccessTokenSilently, logout } = useAuth0();
  const [loading, setLoading] = useState(true);
  const [isRegistered, setIsRegistered] = useState(false);
  const [formData, setFormData] = useState({
    id: "",
    identification: "",
    name: user?.name || "",
    email: user?.email || "",
    password: "",
    role: "",
  });

  useEffect(() => {
    const checkRegistration = async () => {
      if (!user) return;
      const token = await getAccessTokenSilently();
      try {
        const response = await axios.get(
          `http://localhost:3001/users/email?email=${user.email}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (
          (response.status >= 200 && response.status < 300) ||
          response.status === 304
        ) {
          const userData = response.data[0]; // Supone que response.data es un array
          setFormData({
            id: userData.id,
            identification: userData.identification,
            name: userData.name,
            email: userData.email,
            password: userData.password,
            role: userData.role,
          });
          setIsRegistered(true);
        }
      } catch (error) {
        console.error("Error al verificar el registro:", error);
      } finally {
        setLoading(false);
      }
    };

    if (isAuthenticated && user?.email) {
      checkRegistration();
    } else {
      setLoading(false);
    }
  }, [isAuthenticated, user, getAccessTokenSilently]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await getAccessTokenSilently();

    try {
      const response = await axios.post(
        "http://localhost:3001/users",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
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
            id: "",
            identification: "",
            name: user.name,
            email: user.email,
            password: "",
            role: "",
          });
          setIsRegistered(true);
        });
      } else {
        throw new Error("Error al crear el usuario");
      }
    } catch (error) {
      MySwal.fire({
        title: "Error",
        text: "Hubo un problema al crear tu cuenta. Por favor, intenta nuevamente.",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
      console.error("Error:", error);
    }
  };

  return (
    isAuthenticated && (
      <div className={styles.container}>
        {loading ? (
          <div className={styles.spinnerContainer}>
            <BallTriangle
              height={100}
              width={100}
              radius={5}
              color="#4fa94d"
              ariaLabel="ball-triangle-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </div>
        ) : isRegistered ? (
          <div className={styles.container}>
            <div className={styles.sidebar}>
              {user?.picture && (
                <img
                  src={user.picture}
                  alt={user.name}
                  className={styles.profilePicture}
                />
              )}
              <h2 className={styles.profileName}>
                {user?.name || "Nombre no disponible"}
              </h2>
              <p className={styles.profileEmail}>
                {user?.email || "Email no disponible"}
              </p>
              <p className={styles.profileInfo}>
                <strong>ID:</strong> {formData.id}
              </p>
              <p className={styles.profileInfo}>
                <strong>Role:</strong> {formData.role}
              </p>

              <div className={styles.menuItem}>
                <FaUserCircle className={styles.icon} />
                <span>Mi Perfil</span>
              </div>
              <div className={styles.menuItem}>
                <FaCalendarAlt className={styles.icon} />
                <span>Calendario</span>
              </div>
              <div className={styles.menuItem}>
                <FaFacebookMessenger className={styles.icon} />
                <span>Mensajes</span>
              </div>
              <div className={styles.menuItem} style={{ color: formData.role === 'tendero' ? '#4fa94d' : 'inherit' }}>
                <FaBox className={styles.icon} />
                <span>Mis Pedidos</span>
              </div>
              <div className={styles.menuItem}>
                <FaClipboardCheck className={styles.icon} />
                <span>Status Pedido</span>
              </div>
              <div className={styles.menuItem}>
                <FaChartLine className={styles.icon} />
                <span>Mis Ventas</span>
              </div>
              <div className={styles.logoutItem}>
                <button
                  onClick={() =>
                    logout({
                      returnTo: window.location.origin,
                    })
                  }
                >
                  Cerrar Sesión
                </button>
              </div>
            </div>
            {formData.role === 'tendero' && <TenderoPedidos />}
            {formData.role === 'productor' && <ProductorPedidos />}
          </div>
        ) : (
          <div className={styles.profileForm}>
            <div className={styles.form}>
              <h1 className={styles.bienvenido}>Bienvenido</h1>
              <p className={styles.parrafo}>
                Parece que es la primera vez que utilizas nuestra aplicación.
                <br />
                Por favor, completa tu perfil para continuar.
              </p>
              <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <label htmlFor="identification"></label>
                  <input
                    type="text"
                    id="identification"
                    name="identification"
                    value={formData.identification}
                    onChange={handleChange}
                    placeholder="Número de identificación"
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="name"></label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email"></label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled
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
                <div className={styles.formGroup}>
                  <label htmlFor="role"></label>
                  <select
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Seleccione su rol</option>
                    <option value="productor">Productor</option>
                    <option value="tendero">Tendero</option>
                  </select>
                </div>
                <button type="submit" className={styles.submitButton}>
                  Registrar Cuenta
                </button>

                <p
                  onClick={() =>
                    logout({
                      returnTo: window.location.origin,
                    })
                  }
                  style={{
                    cursor: "pointer",
                    textDecoration: "none",
                    color: "blue",
                  }}
                >
                  <MdArrowBackIos /> Regresar
                </p>
              </form>
            </div>
          </div>
        )}
      </div>
    )
  );
};

export default Profile;
