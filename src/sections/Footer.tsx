import React from 'react';
import '../styles/Footer.css';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__copy">© {year} Dev Backend. Todos os direitos reservados.</p>
        <div className="footer__links">
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
          <a href="mailto:dev@email.com">Email</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
