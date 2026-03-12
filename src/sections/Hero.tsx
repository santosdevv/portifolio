import React from 'react';
import avatarImg from '../assets/avatar.jpg';
import '../styles/Hero.css';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="hero">
      <div className="hero__content">
        <div className="hero__avatar-wrapper">
          <img src={avatarImg} alt="Foto profissional do desenvolvedor" className="hero__avatar" />
        </div>
        <h1 className="hero__title">
          Olá, eu sou <span className="hero__accent">Eric Moureira</span>
        </h1>
        <p className="hero__subtitle">
          Construindo a base invisível de <span className="hero__accent">produtos escaláveis</span>.
        </p>
        <p className="hero__description">
          Focado em criar soluções robustas, escaláveis e bem documentadas
          que impulsionam o crescimento de produtos digitais.
        </p>
        <div className="hero__actions">
          <a href="#projetos" className="btn-primary">Ver Projetos</a>
          <a href="#contato" className="btn-secondary">Contato</a>
          <a href="https://www.linkedin.com/in/eric-moureira-127916322/" target="_blank" rel="noreferrer" className="btn-secondary">LinkedIn</a>
          <a href="https://github.com/santosdevv" target="_blank" rel="noreferrer" className="btn-secondary">GitHub</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
