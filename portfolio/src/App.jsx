import { useEffect, useState } from 'react';
import heroImage from './assets/hero.png';
import './App.css';

/* =========================================================
   ÍCONES (SVG inline — sem dependências externas)
========================================================= */

function IconBolt() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8z" />
    </svg>
  );
}

function IconLayers() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12 2 9 5-9 5-9-5 9-5Z" />
      <path d="m3 12 9 5 9-5" />
      <path d="m3 17 9 5 9-5" />
    </svg>
  );
}

function IconBuilding() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="3" width="16" height="18" rx="1" />
      <path d="M9 8h1M14 8h1M9 12h1M14 12h1M9 16h1M14 16h1" />
    </svg>
  );
}

function IconSparkle() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8" />
    </svg>
  );
}

function IconDevice() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="14" height="10" rx="1" />
      <rect x="17" y="9" width="5" height="11" rx="1" />
      <path d="M6 18h6" />
    </svg>
  );
}

function IconCrown() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="m3 17 1.5-9L9 12l3-7 3 7 4.5-4L21 17H3Z" />
      <path d="M3 20h18" />
    </svg>
  );
}

function IconArrowRight() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function IconInstagram() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconLinkedin() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M7 10v7M7 7v.01M11 17v-4.5a2 2 0 0 1 4 0V17M11 10v7" />
    </svg>
  );
}

function IconGithub() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.3c0-.9.1-1.3-.5-1.9 2.8-.3 5.3-1.4 5.3-5.8 0-1.3-.4-2.3-1.2-3.1.1-.3.5-1.5-.1-3.1 0 0-1.1-.3-3.4 1.3a11.8 11.8 0 0 0-6.2 0C6.6 2.7 5.5 3 5.5 3c-.6 1.6-.2 2.8-.1 3.1A4.6 4.6 0 0 0 4.2 9.2c0 4.4 2.5 5.5 5.3 5.8-.4.4-.4.8-.5 1.4V20" />
    </svg>
  );
}

function IconWhatsapp() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 11.5a8.5 8.5 0 1 1-3.8-7.1" />
      <path d="M21 11.5c0 4.7-3.8 8.5-8.5 8.5a8.4 8.4 0 0 1-4.3-1.2L3 20l1.3-5a8.4 8.4 0 0 1-1.2-4.3A8.5 8.5 0 0 1 12.8 3" />
    </svg>
  );
}

/* =========================================================
   HOOK — Revelar elementos ao rolar a página
   (IntersectionObserver nativo, sem libs externas)
========================================================= */

function useScrollReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal--visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}

/* =========================================================
   NAVBAR
========================================================= */

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <a href="#inicio" className="navbar__logo" onClick={closeMenu}>
          NYX<span className="navbar__logo-dot">.</span>
        </a>

        <nav className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          <a href="#inicio" className="navbar__link" onClick={closeMenu}>Início</a>
          <a href="#projetos" className="navbar__link" onClick={closeMenu}>Projetos</a>
          <a href="#servicos" className="navbar__link" onClick={closeMenu}>Serviços</a>
          <a href="#contato" className="navbar__link" onClick={closeMenu}>Contato</a>
          <a href="#contato" className="btn btn--primary navbar__cta" onClick={closeMenu}>
            Orçamento
          </a>
        </nav>

        <button
          type="button"
          className={`navbar__toggle ${menuOpen ? 'navbar__toggle--open' : ''}`}
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Abrir menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}

/* =========================================================
   HERO
========================================================= */

function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero__media">
        <img src={heroImage} alt="" className="hero__image" />
        <div className="hero__overlay"></div>
        <div className="hero__grid" aria-hidden="true"></div>
      </div>

      <div className="hero__content">
        <span className="eyebrow eyebrow--mono hero__fade hero__fade--1">
          Design &amp; Desenvolvimento Web
        </span>

        <h1 className="hero__title hero__fade hero__fade--2">
          Transformo ideias em <em>sites que impressionam</em>
        </h1>

        <p className="hero__subtitle hero__fade hero__fade--3">
          Crio sites modernos, rápidos e profissionais.
        </p>

        <div className="hero__actions hero__fade hero__fade--4">
          <a href="#projetos" className="btn btn--primary">
            Ver Projetos
          </a>
          <a href="#contato" className="btn btn--outline">
            Solicitar Orçamento
          </a>
        </div>
      </div>

      <div className="hero__scroll" aria-hidden="true">
        <span></span>
      </div>
    </section>
  );
}

/* =========================================================
   SOBRE
========================================================= */

function Sobre() {
  return (
    <section id="sobre" className="sobre">
      <div className="sobre__content reveal">
        <span className="eyebrow">Sobre</span>
        <h2 className="section__title">
          Cada projeto começa com uma pergunta simples: o que esse site precisa fazer?
        </h2>
        <p className="sobre__text">
          Sou desenvolvedor front-end especializado em criar sites que unem estética e
          performance. Trabalho com marcas, profissionais e empresas que querem uma presença
          digital à altura do que oferecem — do primeiro rascunho ao site no ar, sem complicação.
        </p>
      </div>
    </section>
  );
}

/* =========================================================
   PROJETOS
========================================================= */

const projetosData = [
  {
    nome: 'Auralis',
    categoria: 'Landing Page',
    descricao: 'Página de conversão para o lançamento de um produto de bem-estar.',
    tom: 'a',
  },
  {
    nome: 'Forge & Co',
    categoria: 'Site Institucional',
    descricao: 'Presença digital sólida para um estúdio de arquitetura.',
    tom: 'b',
  },
  {
    nome: 'Lumen Finance',
    categoria: 'Plataforma Web',
    descricao: 'Interface institucional para uma fintech em crescimento.',
    tom: 'c',
  },
  {
    nome: 'Studio Verde',
    categoria: 'Portfólio',
    descricao: 'Portfólio fotográfico com foco em narrativa visual.',
    tom: 'd',
  },
];

function Projetos() {
  return (
    <section id="projetos" className="projetos">
      <div className="section__header reveal">
        <span className="eyebrow">Projetos</span>
        <h2 className="section__title">Trabalhos selecionados</h2>
      </div>

      <div className="projetos__grid">
        {projetosData.map((projeto) => (
          <article key={projeto.nome} className={`projeto-card projeto-card--${projeto.tom} reveal`}>
            <div className="projeto-card__media">
              <span className="projeto-card__categoria">{projeto.categoria}</span>
              <span className="projeto-card__hover-icon">
                <IconArrowRight />
              </span>
            </div>
            <div className="projeto-card__body">
              <h3 className="projeto-card__nome">{projeto.nome}</h3>
              <p className="projeto-card__descricao">{projeto.descricao}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* =========================================================
   SERVIÇOS
========================================================= */

const servicosData = [
  {
    titulo: 'Landing Pages',
    descricao: 'Páginas de alta conversão, pensadas para campanhas, lançamentos e captação de leads.',
    icon: <IconBolt />,
  },
  {
    titulo: 'Portfólios',
    descricao: 'Vitrines digitais elegantes para profissionais criativos apresentarem seu trabalho.',
    icon: <IconLayers />,
  },
  {
    titulo: 'Sites Institucionais',
    descricao: 'Presença digital sólida e profissional para empresas que querem transmitir confiança.',
    icon: <IconBuilding />,
  },
  {
    titulo: 'Projetos Personalizados',
    descricao: 'Soluções sob medida para quando sua ideia não cabe em um modelo pronto.',
    icon: <IconSparkle />,
  },
];

function Servicos() {
  return (
    <section id="servicos" className="servicos">
      <div className="section__header reveal">
        <span className="eyebrow">Serviços</span>
        <h2 className="section__title">O que eu posso criar para você</h2>
      </div>

      <div className="servicos__grid">
        {servicosData.map((servico) => (
          <article key={servico.titulo} className="servico-card reveal">
            <div className="servico-card__icon">{servico.icon}</div>
            <h3 className="servico-card__titulo">{servico.titulo}</h3>
            <p className="servico-card__descricao">{servico.descricao}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

/* =========================================================
   PROCESSO
========================================================= */

const etapasData = [
  {
    numero: '01',
    titulo: 'Conversa',
    descricao: 'Entendo seu objetivo, seu público e o que o site precisa comunicar.',
  },
  {
    numero: '02',
    titulo: 'Design',
    descricao: 'Defino a identidade visual, a estrutura e a experiência de cada página.',
  },
  {
    numero: '03',
    titulo: 'Desenvolvimento',
    descricao: 'Construo o site com código limpo, performance e responsividade.',
  },
  {
    numero: '04',
    titulo: 'Entrega',
    descricao: 'Ajustes finais, testes e publicação do seu projeto no ar.',
  },
];

function Processo() {
  return (
    <section className="processo">
      <div className="section__header reveal">
        <span className="eyebrow">Processo</span>
        <h2 className="section__title">Do briefing ao site no ar</h2>
      </div>

      <div className="processo__steps">
        {etapasData.map((etapa, index) => (
          <div
            key={etapa.numero}
            className="processo__step reveal"
            style={{ transitionDelay: `${index * 0.1}s` }}
          >
            <span className="processo__numero">{etapa.numero}</span>
            <h3 className="processo__titulo">{etapa.titulo}</h3>
            <p className="processo__descricao">{etapa.descricao}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* =========================================================
   DIFERENCIAIS
========================================================= */

const diferenciaisData = [
  {
    titulo: 'Responsivo',
    descricao: 'Perfeito em qualquer tela, do celular ao desktop.',
    icon: <IconDevice />,
  },
  {
    titulo: 'Performance',
    descricao: 'Sites rápidos, leves e otimizados desde o primeiro carregamento.',
    icon: <IconBolt />,
  },
  {
    titulo: 'Design Moderno',
    descricao: 'Visual atual, limpo e alinhado com a identidade da sua marca.',
    icon: <IconSparkle />,
  },
  {
    titulo: 'Experiência Premium',
    descricao: 'Atenção aos detalhes do briefing à publicação final.',
    icon: <IconCrown />,
  },
];

function Diferenciais() {
  return (
    <section className="diferenciais">
      <div className="section__header reveal">
        <span className="eyebrow">Diferenciais</span>
        <h2 className="section__title">Por que trabalhar comigo</h2>
      </div>

      <div className="diferenciais__grid">
        {diferenciaisData.map((item) => (
          <div key={item.titulo} className="diferencial-card reveal">
            <div className="diferencial-card__icon">{item.icon}</div>
            <h3 className="diferencial-card__titulo">{item.titulo}</h3>
            <p className="diferencial-card__descricao">{item.descricao}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* =========================================================
   CONTATO
========================================================= */

function Contato() {
  const [form, setForm] = useState({ nome: '', email: '', mensagem: '' });
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pronto para integrar com um serviço de envio (Formspree, EmailJS, backend próprio, etc.)
    setEnviado(true);
    setForm({ nome: '', email: '', mensagem: '' });
  };

  return (
    <section id="contato" className="contato">
      <div className="contato__inner reveal">
        <div className="contato__intro">
          <span className="eyebrow">Contato</span>
          <h2 className="section__title">Vamos dar vida ao seu projeto?</h2>
          <p className="contato__text">
            Conte um pouco sobre sua ideia e retorno em até 24 horas com os próximos passos.
          </p>
        </div>

        <form className="contato__form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nome">Nome</label>
            <input
              id="nome"
              name="nome"
              type="text"
              placeholder="Seu nome"
              value={form.nome}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="seu@email.com"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="mensagem">Mensagem</label>
            <textarea
              id="mensagem"
              name="mensagem"
              rows="5"
              placeholder="Conte um pouco sobre o seu projeto..."
              value={form.mensagem}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="btn btn--primary contato__submit">
            Vamos criar seu projeto
            <IconArrowRight />
          </button>

          {enviado && (
            <p className="contato__feedback" role="status">
              Mensagem enviada! Em breve você terá uma resposta.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

/* =========================================================
   FOOTER
========================================================= */

function Footer() {
  const ano = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <span className="footer__logo">
            NYX<span className="navbar__logo-dot">.</span>
          </span>
          <p className="footer__tagline">Sites que impressionam.</p>
        </div>

        <div className="footer__social">
          <a href="#" aria-label="Instagram" className="footer__icon">
            <IconInstagram />
          </a>
          <a href="#" aria-label="LinkedIn" className="footer__icon">
            <IconLinkedin />
          </a>
          <a href="#" aria-label="GitHub" className="footer__icon">
            <IconGithub />
          </a>
          <a href="#" aria-label="WhatsApp" className="footer__icon">
            <IconWhatsapp />
          </a>
        </div>
      </div>

      <div className="footer__bottom">
        <p>© {ano} NYX Studio. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

/* =========================================================
   APP
========================================================= */

function App() {
  useScrollReveal();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Sobre />
        <Projetos />
        <Servicos />
        <Processo />
        <Diferenciais />
        <Contato />
      </main>
      <Footer />
    </>
  );
}

export default App;
