import Facebook from "../../assets/image/social1.svg"
import Instagram from "../../assets/image/social2.svg"
import Linkedin from "../../assets/image/social3.svg"
import "./footerComponent.css";

const FooterComponent = () => {
  return (
    <footer className="footer">
      <p className="footer-left">
        &copy; {new Date().getFullYear()} Sermaluc. Todos los derechos reservados.
      </p>
      <nav className="footer-center">
        <a href="/terms">Términos y Condiciones</a>
      </nav>
      <div className="footer-right">
        <img src={Facebook} alt="Facebook" className="social-icon" />
        <img src={Linkedin} alt="Twitter" className="social-icon" />
        <img src={Instagram} alt="Instagram" className="social-icon" />
      </div>
    </footer>
  );
};

export default FooterComponent;
