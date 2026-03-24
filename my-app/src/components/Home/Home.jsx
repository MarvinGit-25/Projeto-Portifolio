import React from "react";
import "./home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faLinkedinIn, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import Perfil from "../../assets/img/meuPerfilWeb3D.png";

export default function Home() {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h3>Olá visitante!</h3>
        <h1>Meu nome é Marcos Vinicius</h1>
        <h2>
          Desenvolvedor<span> Full-Stack</span>
        </h2>

        <div className="social-media">
          <Link
            to="https://www.facebook.com/share/1SeD6JYVP8/?mibextid=wwXIfr"
            target="blank"
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </Link>

          <Link
            to="https://www.instagram.com/viniciussilva8272?igsh=MXVlYmRoMTd2N2k2aA%3D%3D&utm_source=qr"
            target="blank"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </Link>

          <Link
            to="https://www.linkedin.com/in/marcos-vinicius-rocha-da-silva-91328b20"
            target="blank"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </Link>
        </div>
        <div className="div-button">
          <a href="#contato" className="button-cv">Solicitar Orçamento</a>
        </div>
      </div>
      <div className="home-img">
        <img src={Perfil} alt="perfil do Portifolio" />
      </div>
    </section>
  );
}
