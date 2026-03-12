import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import '../styles/Navbar.css';

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Habilidades', href: '#habilidades' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Contato', href: '#contato' },
];

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const theme = resolvedTheme || 'light';
  const isDark = theme === 'dark';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <a href="#inicio" className="navbar__logo">
          {'<Dev />'}
        </a>

        <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={handleLinkClick}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="navbar__theme-toggle"
          onClick={() => setTheme(isDark ? 'light' : 'dark')}
          aria-label={`Ativar modo ${isDark ? 'claro' : 'escuro'}`}
        >
          {isDark ? '☀️' : '🌙'}
        </button>

        <button
          className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
