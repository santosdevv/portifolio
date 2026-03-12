import React from 'react';
import SectionReveal from '../components/SectionReveal';
import '../styles/Skills.css';

interface Skill {
  name: string;
  level: 'Avançado' | 'Intermediário' | 'Básico';
  category: string;
}

const skills: Skill[] = [
  { name: 'Node.js', level: 'Avançado', category: 'Back-end' },
  { name: 'JavaScript', level: 'Avançado', category: 'Linguagem' },
  { name: 'APIs REST', level: 'Avançado', category: 'Back-end' },
  { name: 'MySQL', level: 'Avançado', category: 'Banco de dados' },
  { name: 'Git', level: 'Intermediário', category: 'Ferramentas' },
  { name: 'HTML', level: 'Intermediário', category: 'Front-end' },
  { name: 'CSS', level: 'Intermediário', category: 'Front-end' },
  { name: 'React', level: 'Intermediário', category: 'Front-end' },
];

const levelColors: Record<string, string> = {
  Avançado: 'skill-tag--advanced',
  Intermediário: 'skill-tag--intermediate',
  Básico: 'skill-tag--basic',
};

const Skills: React.FC = () => {
  return (
    <section id="habilidades" className="skills section-padding">
      <SectionReveal>
        <div className="container">
          <h2 className="section-title">Habilidades</h2>
          <p className="section-subtitle">Tecnologias e ferramentas que utilizo no dia a dia.</p>
          <div className="skills__grid">
            {skills.map((skill) => (
              <div key={skill.name} className="skill-card">
                <div className="skill-card__header">
                  <h3 className="skill-card__name">{skill.name}</h3>
                  <span className={`skill-tag ${levelColors[skill.level]}`}>
                    {skill.level}
                  </span>
                </div>
                <span className="skill-card__category">{skill.category}</span>
              </div>
            ))}
          </div>
        </div>
      </SectionReveal>
    </section>
  );
};

export default Skills;
