import Button from '../components/Button';
import Reveal from '../components/Reveal';
import './CTA.css';

export default function CTA() {
  return (
    <section id="contact" className="section cta">
      <div className="cta__bg-glow" aria-hidden="true" />
      <div className="container cta__container">
        <Reveal>
          <span className="eyebrow">// próximo passo</span>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="cta__heading">
            Vamos criar o seu<br />
            <span className="text-gradient">próximo site?</span>
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="cta__sub">
            Entre em contato e receba um orçamento sem compromisso em até 24h.
          </p>
        </Reveal>
        <Reveal delay={300}>
          <div className="cta__actions">
            <Button href="https://wa.me/5500000000000" variant="primary" target="_blank">
              Solicitar Orçamento
            </Button>
            <Button href="mailto:contato@seusite.com.br" variant="secondary">
              Enviar E-mail
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
