import { React } from "react";
import "./section.css";
import Button from "../ButtonCV/ButtonCV";
import Formulario from "../Formulario/Formulario";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Perfil from "../../assets/img/meuPerfilWeb3D.png";
import Img1 from "../../assets/img/img1.jpeg";
import Img2 from "../../assets/img/img2.jpeg";
import Img3 from "../../assets/img/img3.jpeg";
import Img4 from "../../assets/img/img4.jpeg";
import Img5 from "../../assets/img/img4.jpeg";
import Img16 from "../../assets/img/img6.jpeg";

export default function Section() {
  return (
    <main className="all-section">
      <section className="home" id="home">
        <div className="home-content">
          <h3>Olá visitante!</h3>
          <h1>Meu nome é Marcos Vinicius</h1>
          <h2>
            Desenvolvedor<span> Front-end</span>
          </h2>

          {/* <p>
            Sou um estudante de desenvolvimento web
            tenho pouca experiência de mercado, mas muita
            força de vontade.
            Atualmente busco uma vaga de estagio para aprimorar
            meus conhecimentos
          </p> */}

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
              to="https://www.linkedin.com/in/marcos-vinicius-rocha-da-silva-91328b20
            b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              target="blank"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </Link>
          </div>
          <div className="div-button">
            <Button />
          </div>
        </div>
        <div className="home-img">
          <img src={Perfil} alt="perfil do Portifolio" />
        </div>
      </section>

      <section className="services">
        <h2>
          Meus <span>serviços</span>
        </h2>

        <div className="services-container">
          <div className="services-box">
            <span className="icon">
              <FontAwesomeIcon icon={faCode} />
            </span>
            <h3>web Development</h3>
            <p>
              Posso garantir que seu site funcione bem em diferentes
              dispositivos, como smartphones, tablets e desktops, adaptando o
              layout e os elementos visuais. Implementando Interfaces: Posso
              transformar designs em código, utilizando linguagens como HTML,
              CSS e JavaScript para criar interfaces atraentes e funcionais.
              Otimização de Performance: Posso otimizar o carregamento e a
              performance do seu site, garantindo que os usuários tenham uma
              experiência rápida e fluida. Testes e Manutenção: Posso fazer
              testes para identificar e corrigir bugs, além de manter o site
              atualizado com as últimas tecnologias e tendências.
            </p>
            <Link className="btn" to="#more">
              read more
            </Link>
          </div>
        </div>
      </section>

      <section className="portifolio" id="projetos">
        {/* <h2 className="projeto">Meus<span>Projetos</span></h2> */}
        <div className="portifolio-container">
          <div className="portifolio-box">
            <img src={Img1} alt="portifolio-1" />

            <div className="portifolio-layer">
              <h4>web Development</h4>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
                iusto sunt eum quidem aliquam porro molestias, odit nobis
                excepturi iure. quae sed sunt architectoreprehenderit repellat
                officiis quasi soluta. quae sed sunt architectoreprehenderit
                repellat officiis quasi soluta
              </p>
              <Link className="link-Layer" to="#home">
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </Link>
            </div>
          </div>
        </div>

        <div className="portifolio-container">
          <div className="portifolio-box">
            <img src={Img2} alt="portifolio-2" />

            <div className="portifolio-layer">
              <h4>web Development</h4>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
                iusto sunt eum quidem aliquam porro molestias, odit nobis
                excepturi iure. quae sed sunt architectoreprehenderit repellat
                officiis quasi soluta. quae sed sunt architectoreprehenderit
                repellat officiis quasi soluta
              </p>
              <Link className="link-Layer" to="#home">
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </Link>
            </div>
          </div>
        </div>

        <div className="portifolio-container">
          <div className="portifolio-box">
            <img src={Img3} alt="portifolio-3" />

            <div className="portifolio-layer">
              <h4>web Development</h4>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
                iusto sunt eum quidem aliquam porro molestias, odit nobis
                excepturi iure. quae sed sunt architectoreprehenderit repellat
                officiis quasi soluta. quae sed sunt architectoreprehenderit
                repellat officiis quasi soluta
              </p>
              <Link className="link-Layer" to="#home">
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </Link>
            </div>
          </div>
        </div>

        <div className="portifolio-container">
          <div className="portifolio-box">
            <img src={Img4} alt="portifolio-4" />

            <div className="portifolio-layer">
              <h4>web Development</h4>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
                iusto sunt eum quidem aliquam porro molestias, odit nobis
                excepturi iure. quae sed sunt architectoreprehenderit repellat
                officiis quasi soluta. quae sed sunt architectoreprehenderit
                repellat officiis quasi soluta
              </p>
              <Link className="link-Layer" to="#home">
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </Link>
            </div>
          </div>
        </div>

        <div className="portifolio-container">
          <div className="portifolio-box">
            <img src={Img5} alt="portifolio-5" />

            <div className="portifolio-layer">
              <h4>web Development</h4>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
                iusto sunt eum quidem aliquam porro molestias, odit nobis
                excepturi iure. quae sed sunt architectoreprehenderit repellat
                officiis quasi soluta. quae sed sunt architectoreprehenderit
                repellat officiis quasi soluta
              </p>

              <Link className="link-Layer" to="#home">
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </Link>
            </div>
          </div>
        </div>

        <div className="portifolio-container">
          <div className="portifolio-box">
            <img src={Img16} alt="portifolio-6" />

            <div className="portifolio-layer">
              <h4>web Development</h4>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
                iusto sunt eum quidem aliquam porro molestias, odit nobis
                excepturi iure. quae sed sunt architectoreprehenderit repellat
                officiis quasi soluta. quae sed sunt architectoreprehenderit
                repellat officiis quasi soluta
              </p>
              <Link className="link-Layer" to="#home">
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="contato" id="contato">
        <h2>
          contate<span>-me!</span>
        </h2>

        <Formulario />
        <section className="sobre" id="sobre">
          <div className="sobre-img">
            <img src={Perfil} alt="perfil" />
          </div>

          <div className="conteiner-sobre">
            <h3>sobre mim</h3>
            <h1>
              Desenvolvedor<span> Front-end</span>
            </h1>
            <p>
              Sou estudante de desenvolvimento front-end, tenho pouca
              experiência de mercado, mas muita força de vontade. Atualmente
              busco uma vaga de estagio para aprimorar meus conhecimentos
            </p>
            <Link to="#" className="btn">
              leia mais
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}
