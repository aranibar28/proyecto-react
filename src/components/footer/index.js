import "./footer.scss";
import { Link } from "react-router-dom";
export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div>
          <Link to="../users" className="header__logo">
            <img src="../logo-white.png" alt="logo" />
          </Link>
          <p>
            Tenemos un montón de piezas divertidas de equipos que se construyen
            en cada cuerpo de su cuerpo y de los constructores para que las
            ejecuten.
          </p>
          <ul>
            <li>GymVast, Av. Caminos del Inca - Surco</li>
            <li>952-489-264</li>
          </ul>
        </div>
        <div>
          <strong>PAGINAS</strong>
          <ul className="grid grid-cols-2">
            <li>Sobre GymVast</li>
            <li>Nuestros Trainers</li>
            <li>Nuestra Tienda</li>
            <li>Precios y Planes</li>
            <li>Nuestros Servicios</li>
            <li>Reglas de la plataforma</li>
            <li>Privacidad</li>
            <li>Career</li>
            <li>FAQ</li>
            <li>Contáctanos</li>
          </ul>
        </div>
        <div>
          <strong>NEWSLETTER</strong>
          <p>
            Suscribete y recibe informacion sobre nuestros productos y
            servicios.
          </p>
          <div>
            <input type="text" placeholder="Tu e-mail" />
            <button>Sucríbete</button>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright © 2021 Grupo-c. All Rights Reserved</p>
        <ul className="flex">
          <li>Facebook</li>
          <li>Twiter</li>
          <li>Linkendin</li>
          <li>Instagram</li>
        </ul>
      </div>
    </footer>
  );
}
