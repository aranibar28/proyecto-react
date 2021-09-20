import "./footer.scss";
import { Link } from "react-router-dom";
import { Url } from "./containers";
import { Button } from "ui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faMapMarkerAlt, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div>
          <Link to="../users">
            <img src="../logo-red.png" alt="logo" />
          </Link>
          <p>
            Tenemos un montón de piezas divertidas de equipos que se construyen
            en cada cuerpo de su cuerpo y de los constructores para que las
            ejecuten.
          </p>
          <ul>
            <li>
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                size="2x"
                className="icon"
              />
               Av. Caminos del Inca - Surco
            </li>
            <li>
              <FontAwesomeIcon icon={faPhoneAlt} size="2x" className="icon" />
              <a
                href="https://wa.me/51940994003"
                className="text-2xl font-bold"
              >
                +51 940 994 003
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3>PÁGINAS</h3>
          <Url />
        </div>
        <div>
          <h3>SUCRÍBETE</h3>
          <p>
            Suscríbete y recibe información sobre nuestros productos y
            servicios.
          </p>
          <div className="flex flex-col">
            <input type="text" placeholder="Suscríbete" />
            <Button type="submit">Ingresar</Button>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright © 2021 Grupo C - Todos los derechos reservados.</p>
        <ul>
          <li>
            <FontAwesomeIcon icon={faFacebook} size="2x" className="fb" />
          </li>
          <li>
            <FontAwesomeIcon icon={faTwitter} size="2x" className="tw" />
          </li>
          <li>
            <FontAwesomeIcon icon={faLinkedin} size="2x" className="li" />
          </li>
          <li>
            <FontAwesomeIcon icon={faInstagram} size="2x" className="in" />
          </li>
        </ul>
      </div>
    </footer>
  );
}
