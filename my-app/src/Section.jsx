import React  from "react"
import './section.css'
import Img from 'react-image'
import IMG from "../../img/img1.jpeg"
export default function Section(){


    return(
        <section class="home" id="home">
          <div>
            {<img src="../../img/img1.jpeg" alt="" />}
          </div>
      <div class="home-content">
        <h3>Buenas, im</h3>
        <h1>Marcos Vinicius</h1>
        <h3>web <span>development</span></h3>

        <p>
          Olá, meu nome é Marcos Vinicius, tenho 29 anos, 
          atualmente estudo desenvolvimento web 
          tenho pouca experiência de mercado, mas muita
          força de vontade.
          Atualmente busco uma vaga de estagio para aprimorar 
          meus conhecimentos
        </p>

        <div class="social-media">
            
          <a href="#"><i class="bx bxl-facebook"></i></a>
          <a href="#"><i class="bx bxl-instagram"></i></a>
          <a href="#"><i class="bx bxl-linkedin"></i></a>
        </div>

        <div>
          <a href="#" class="btn">Dowload CV</a>

          
        </div>
      </div>
      <div class="home-img">
        <img src="./img/minhaIMG .png" alt="Perfil" />
      </div>
    </section>
    )
}