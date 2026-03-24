import './header.css';
import React, { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <header className="Cabeçalho">
      <nav className={`nav-responsive ${isMenuOpen ? 'open' : ''}`}>
        <a href="#home" onClick={toggleMenu}>Home</a>
        <a href="#projetos" onClick={toggleMenu}>Projetos</a>
        <a href="#sobre" onClick={toggleMenu}>Sobre</a>
        <a href="#contato" onClick={toggleMenu}>Contato</a>
      </nav>

      <nav className="nav">
        <h1 className="logo">Vinicius</h1>
        
        <div className="nav-links">
          <a href="#home">Início</a>
          <a href="#projetos">Projetos</a>
          <a href="#sobre">Sobre</a>
          <a href="#contato">Contato</a>
        </div>

        <div className={`Menu-Hamburguer ${isMenuOpen ? 'change' : ''}`} onClick={toggleMenu}>
          <div className='linha1'></div>
          <div className='linha2'></div>
          <div className='linha3'></div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
