import "./Footer.css";
import logo from "../images/logo.svg";

export default function Footer() {
    return (
        <div className="footer-container">
            <img src={logo} />
            <div className="footer-links">
                <a>About</a>
                <a>Services</a>
                <a>Projects</a>
            </div>
            <div className="socials">
                <i class="fa-brands fa-square-facebook"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-pinterest"></i>
            </div>
        </div>
    );
}
