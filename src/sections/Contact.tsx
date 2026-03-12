import React, { useState } from 'react';
import SectionReveal from '../components/SectionReveal';
import '../styles/Contact.css';

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simula envio
    setSubmitted(true);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contato" className="contact section-padding">
      <SectionReveal>
        <div className="container">
          <h2 className="section-title">Contato</h2>
          <p className="section-subtitle">Vamos conversar? Envie uma mensagem ou me encontre nas redes.</p>
          <div className="contact__grid">
            <form className="contact__form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Seu nome"
                className="contact__input"
                value={form.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Seu e-mail"
                className="contact__input"
                value={form.email}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Sua mensagem"
                className="contact__input contact__textarea"
                rows={5}
                value={form.message}
                onChange={handleChange}
                required
              />
              <button type="submit" className="btn-primary">
                {submitted ? '✓ Mensagem enviada!' : 'Enviar mensagem'}
              </button>
            </form>
            <div className="contact__info">
              <div className="contact__info-card">
                <h3>E-mail</h3>
                <a href="ericmoureira35@email.com">ericmoureira35@email.com</a>
              </div>
              <div className="contact__info-card">
                <h3>LinkedIn</h3>
                <a href="https://www.linkedin.com/in/eric-moureira-127916322/" target="_blank" rel="noreferrer">
                  linkedin.com/in/eric-moureira-127916322/
                </a>
              </div>
              <div className="contact__info-card">
                <h3>GitHub</h3>
                <a href="https://github.com/santosdevv" target="_blank" rel="noreferrer">
                  github.com/santosdevv
                </a>
              </div>
            </div>
          </div>
        </div>
      </SectionReveal>
    </section>
  );
};

export default Contact;
