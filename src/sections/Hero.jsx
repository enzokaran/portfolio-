import Button from '../components/Button';
import Reveal from '../components/Reveal';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero section">
      <div className="hero__grid-lines" aria-hidden="true" />
      <div className="container hero__container">
        <Reveal>
          <span className="eyebrow">Disponível para novos projetos</span>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="hero__heading">
            Desenvolvedor Web<br />
            <span className="text-gradient">&amp; Designer</span>
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="hero__sub">
            Crio sites modernos que ajudam empresas a <strong>gerar mais clientes.</strong>
          </p>
        </Reveal>

        <Reveal delay={300}>
          <div className="hero__actions">
            <Button href="#contact" variant="primary">Solicitar Orçamento</Button>
            <Button href="#projects" variant="secondary">Ver Projetos</Button>
          </div>
        </Reveal>

        <Reveal delay={400}>
          <div className="hero__stats">
            <div className="hero__stat">
              <strong>+40</strong>
              <span>Projetos entregues</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <strong>5★</strong>
              <span>Avaliação média</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <strong>3 anos</strong>
              <span>De experiência</span>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="hero__scroll-indicator" aria-hidden="true">
        <div className="hero__scroll-line" />
      </div>
    </section>
  );
}
