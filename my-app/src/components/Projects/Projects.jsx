import React from "react";
import "./projects.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { projects } from "./projectsData";

export default function Projects() {
  return (
    <section className="portifolio" id="projetos">
      <div className="portifolio-header">
         <h2>Meus <span>Projetos</span></h2>
      </div>
      
      <div className="portifolio-grid">
        {projects.map((project) => (
          <div className="portifolio-box" key={project.id}>
            <img src={project.image} alt={`projeto-${project.id}`} />

            <div className={`portifolio-layer ${project.layerClass || ""}`}>
              <h4>{project.title}</h4>
              <p>{project.description}</p>
              
              <div className="portifolio-btns">
                <a 
                  className="btn-primary-layer" 
                  href={project.demoLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Ver Projeto <FontAwesomeIcon icon={faExternalLinkAlt} />
                </a>
                
                <a 
                  className="btn-github-layer" 
                  href={project.repoLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  title="Ver código no GitHub"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
