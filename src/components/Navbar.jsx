import { useEffect, useState } from 'react';
import Button from './Button';
import './Navbar.css';

const links = [
  { label: 'Projetos', href: '#projects' },
  { label: 'Sobre', href: '#about' },
  { label: 'Processo', href: '#process' },
  { label: 'Depoimentos', href: '#testimonials' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        <a href="#" className="navbar__logo">
          <span className="navbar__logo-dot" />
          dev<span className="text-gradient">folio</span>
        </a>

        <nav className={`navbar__nav ${menuOpen ? 'navbar__nav--open' : ''}`}>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="navbar__link"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <Button href="#contact" variant="primary">Solicitar Orçamento</Button>
        </nav>

        <button
          className={`navbar__burger ${menuOpen ? 'navbar__burger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
