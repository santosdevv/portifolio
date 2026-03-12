import React from 'react';
import SectionReveal from '../components/SectionReveal';
import '../styles/About.css';

const About: React.FC = () => {
  return (
    <section id="sobre" className="about section-padding">
      <SectionReveal>
        <div className="container">
          <h2 className="section-title">Sobre mim</h2>
          <p className="section-subtitle">Um pouco da minha trajetória e motivação.</p>
          <div className="about__grid">
            <div className="about__text">
              <p>
                Sou um desenvolvedor Back-end apaixonado por construir sistemas
                eficientes e escaláveis. Meu foco está em criar APIs REST bem
                estruturadas, gerenciar bancos de dados e garantir que toda a
                infraestrutura do servidor funcione com máxima performance.
              </p>
              <p>
                Acredito que o código invisível é o que sustenta grandes produtos.
                Cada endpoint, cada query otimizada e cada decisão arquitetural
                contribuem para uma experiência de usuário excepcional.
              </p>
            </div>
            <div className="about__info">
              <div className="about__card">
                <h3>Formação</h3>
                <ul>
                  <li>
                    <strong>Técnico em Informática para Internet</strong>
                    <span>SENAI</span>
                  </li>
                  <li>
                    <strong>Engenharia de Software</strong>
                    <span>Graduação em andamento</span>
                  </li>
                </ul>
              </div>
              <div className="about__card">
                <h3>Foco</h3>
                <ul>
                  <li>Desenvolvimento Back-end</li>
                  <li>APIs REST & Microsserviços</li>
                  <li>Bancos de dados relacionais</li>
                  <li>Arquitetura de software</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </SectionReveal>
    </section>
  );
};

export default About;
