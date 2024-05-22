import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p>Contacto: info@pollosaunclick.com</p>
        <p>Teléfono: 123-456-789</p>
      </div>
      <div className={styles.footerSocial}>
        <a href="#" className={styles.socialLink}>
          <FaFacebook />
        </a>
        <a href="#" className={styles.socialLink}>
          <FaSquareXTwitter />
        </a>
        <a href="#" className={styles.socialLink}>
          <FaInstagramSquare />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
