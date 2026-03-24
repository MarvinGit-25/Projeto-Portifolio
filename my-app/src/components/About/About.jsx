import React from "react";
import "./about.css";
import { Link } from "react-router-dom";
import Perfil from "../../assets/img/meuPerfilWeb3D.png"; 

export default function About() {
  return (
    <section className="sobre" id="sobre">
      <div className="sobre-img">
        <img src={Perfil} alt="perfil" />
      </div>

      <div className="conteiner-sobre">
        <h3>sobre mim</h3>
        <h1>
          Desenvolvedor<span> Full-Stack</span>
        </h1>
        <p>
          Sou um desenvolvedor freelancer integrado às melhores ferramentas de  
          desenvolvimento e automação modernos, focado em ajudar empresas e empreendedores 
          a tirarem suas ideias do papel. Com atuação no desenvolvimento 
          Full-Stack (Front-end com React e desenvolvimento Back-end), construo sistemas 
          robustos, seguros e eficientes baseados na real necessidade do seu projeto. 
          Seja elaborando uma Landing Page para alta conversão ou desenvolvendo 
          uma plataforma completa SaaS, meu objetivo é entregar resultados 
          de excelência e impacto financeiro direto no mundo digital.
        </p>
        <Link to="#contato" className="btn">
          leia mais
        </Link>
      </div>
    </section>
  );
}
