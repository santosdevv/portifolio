import React from 'react';
import SectionReveal from '../components/SectionReveal';
import project1Img from '../assets/project1.jpg';
import project2Img from '../assets/project2.jpg';
import project3Img from '../assets/project3.jpg';
import '../styles/Projects.css';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  demo: string;
}

const projects: Project[] = [
  {
    title: 'GetCall',
    description:
      'O GetCall é uma aplicação fullstack desenvolvida em colaboração com outros desenvolvedores, com o objetivo de criar uma plataforma moderna para gerenciamento de comunicação e contatos. O projeto integra frontend e backend, utilizando APIs para conectar a interface do usuário ao servidor e garantir o gerenciamento eficiente dos dados.',
    image: project1Img,
    technologies: ['Node.js', 'Express', 'MySQL', 'JWT', 'JavaScript'],
    github: 'https://github.com/Cardoso-St/Getcall',
    demo: '#',
  },

];

const Projects: React.FC = () => {
  return (
    <section id="projetos" className="projects section-padding">
      <SectionReveal>
        <div className="container">
          <h2 className="section-title">Projetos</h2>
          <p className="section-subtitle">Alguns dos projetos que construí para resolver problemas reais.</p>
          <div className="projects__grid">
            {projects.map((project) => (
              <div key={project.title} className="project-card">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-card__image"
                  loading="lazy"
                />
                <div className="project-card__body">
                  <h3 className="project-card__title">{project.title}</h3>
                  <p className="project-card__desc">{project.description}</p>
                  <div className="project-card__tags">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="project-card__tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="project-card__links">
                    <a href={project.github} target="_blank" rel="noreferrer" className="btn-secondary">
                      GitHub
                    </a>
                    <a href={project.demo} target="_blank" rel="noreferrer" className="btn-primary">
                      Ver Projeto
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionReveal>
    </section>
  );
};

export default Projects;
