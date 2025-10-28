import './header.css'
import React from "react";

function Header() {
  function toggleMenu() {
    const nav = document.querySelector('.nav-responsive')
    const menuHamburguer = document.querySelector('.Menu-Hamburguer')
    menuHamburguer.classList.toggle('change')
    if(menuHamburguer.classList.contains('change')){
        nav.style.display = 'block'
    }
    else {
        nav.style.display = 'none'
    }
} 

  return (
    <div className="Cabeçalho">
      <nav className="nav-responsive">
        <a href="#home">Home</a>
        <a href="#projetos">Projetos</a>
        <a href="#sobre">Sobre</a>
        <a href="#contato">Contato</a>
      </nav>
      
      <nav className="nav">
      <h1>Vinicius Silva</h1>
        <a href="#home">Inicio</a>
        <a href="#projetos">Projetos</a>
        <a href="#sobre">Sobre</a>
        <a href="#contato">Contato</a>

        <div className='Menu-Hamburguer' onClick={toggleMenu}>
        <div className='linha1'></div>
        <div className='linha2'></div>
        <div className='linha3'></div>
      </div>
      </nav>
    </div>
  );
}
export default Header;
