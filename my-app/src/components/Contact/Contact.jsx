import React from "react";
import "./contact.css";
import Formulario from "../Formulario/Formulario";

export default function Contact() {
  return (
    <section className="contato" id="contato">
      <h2>
        contate<span>-me!</span>
      </h2>

      <Formulario />
    </section>
  );
}
