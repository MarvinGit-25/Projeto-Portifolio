import React from "react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
function Form() {
  const [nome, SetNome] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [assunto, setAssunto] = useState("");
  const [mensagem, setMensagem] = useState("");

  function MudarValorInput(e) {
    e.preventDefault();
    SetNome(e.target.value);
  }

  // function submit(e) {
  //   e.preventDefault();
  //   if (nome === "" || email === "" || number === "" || assunto === "") {
  //     alert("preencha os campos");
  //     return;
  //   }
  //   alert("tudo certo");
  // }

  function submit(e) {
    e.preventDefault();

    // Create an object to store validation errors
    const errors = [];

    // Validate each field
    if (!nome.trim()) errors.push("Nome é obrigatório");
    if (!email.trim()) errors.push("Email é obrigatório");
    // if (!number.trim()) errors.push("Número é obrigatório");
    if (!assunto.trim()) errors.push("Assunto é obrigatório");

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email && !emailRegex.test(email)) {
      errors.push("Email inválido");
    }

    // Phone number validation
    if (number && number.length < 8) {
      errors.push("Número de telefone inválido");
    }

    // If there are errors, show them and return
    if (errors.length > 0) {
      alert(errors.join("\n"));
      return;
    }

    // Here you would typically send the data to your backend

    const templateParams = {
      from_name: nome,
      email: email,
      number: number,
      assunto: assunto,
      message: mensagem,
    };

    emailjs
      .send(
        "service_80cwkt6",
        "template_t56w2bi",
        templateParams,
        "GNMc8I3hg13EPSoHI"
      )
      .then(() => {
        alert("Formulário enviado com sucesso!");
        SetNome("");
        setEmail("");
        setNumber("");
        setAssunto("");
        setMensagem("");
      })
      .catch((err) => {
        console.error("Erro ao enviar email:", err);
        alert("Erro ao enviar. Tente novamente.");
      });
  }

  return (
    <form onSubmit={submit}>
      <div className="input-box">
        <input
          type="text"
          placeholder="Nome completo"
          onChange={MudarValorInput}
          value={nome}
        />
        <input
          type="email"
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </div>

      <div className="input-box">
        <input
          id="unico"
          type="number"
          placeholder="Numero de telefone:                         Opcional"
          onChange={(e) => setNumber(e.target.value)}
          value={number}
        />
        <input
          type="text"
          placeholder="Assunto"
          onChange={(e) => setAssunto(e.target.value)}
          value={assunto}
        />
      </div>

      <textarea
        cols="30"
        rows="10"
        placeholder="Mensagem"
        onChange={(e) => setMensagem(e.target.value)}
        value={mensagem}
      ></textarea>
      <button className="btnForm">Enviar</button>
    </form>
  );
}

export default Form;
