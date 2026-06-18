import Reveal from '../components/Reveal';
import './About.css';

const skills = ['React', 'JavaScript', 'HTML & CSS', 'SEO', 'Design Responsivo', 'Node.js'];

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container about__container">
        <div className="about__image-col">
          <Reveal>
            <div className="about__image-wrap glass">
              <div className="about__image-placeholder">
                <span>Sua foto aqui</span>
              </div>
              <div className="about__badge glass">
                <span className="about__badge-dot" />
                Disponível para projetos
              </div>
            </div>
          </Reveal>
        </div>

        <div className="about__content">
          <Reveal>
            <span className="eyebrow">&lt;sobre/&gt;</span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="about__heading">
              Código limpo,<br />
              <span className="text-gradient">resultado real</span>
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="about__text">
              Olá! Sou um desenvolvedor web apaixonado por transformar ideias em experiências digitais que realmente funcionam. Trabalho com empresas de todos os tamanhos para criar sites que não apenas impressionam visualmente, mas que geram clientes e crescimento real.
            </p>
            <p className="about__text">
              Cada projeto é tratado de forma única: entendo o negócio, defino a estratégia e entrego com qualidade — sem templates prontos, sem atalhos.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <div className="about__skills">
              {skills.map((skill) => (
                <span key={skill} className="about__skill-tag">{skill}</span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
