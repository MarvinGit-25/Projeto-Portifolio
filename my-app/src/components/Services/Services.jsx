import React from "react";
import "./services.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faPalette, faRocket } from "@fortawesome/free-solid-svg-icons";

export default function Services() {
  return (
    <section className="services">
      <h2>
        Meus <span>serviços</span>
      </h2>

      <div className="services-container">
        <div className="services-box">
          <span className="icon">
            <FontAwesomeIcon icon={faCode} />
          </span>
          <h3>Desenvolvimento Full-Stack</h3>
          <p>
            Criação de sites e sistemas completos ponta a ponta.
            Do Front-end moderno à arquitetura segura no Back-end.
          </p>
        </div>

        <div className="services-box">
          <span className="icon">
            <FontAwesomeIcon icon={faPalette} />
          </span>
          <h3>UI/UX & Design</h3>
          <p>
            Transformação de ideias em interfaces atraentes e responsivas,
            garantindo fluidez em celulares e computadores.
          </p>
        </div>

        <div className="services-box">
          <span className="icon">
            <FontAwesomeIcon icon={faRocket} />
          </span>
          <h3>Performance & Escalabilidade</h3>
          <p>
            Otimização progressiva de aplicações web focada em carregamento rápido,
            técnicas de SEO, acessibilidade e aumento na conversão de visitantes.
          </p>
        </div>
      </div>
    </section>
  );
}
