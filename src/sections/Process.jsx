import processSteps from '../assets/data/process';
import ProcessCard from '../components/ProcessCard';
import Reveal from '../components/Reveal';
import './Process.css';

export default function Process() {
  return (
    <section id="process" className="section">
      <div className="container">
        <Reveal>
          <span className="eyebrow">// processo</span>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="process__heading">
            Como eu trabalho
          </h2>
        </Reveal>
        <Reveal delay={150}>
          <p className="process__sub">
            Um processo claro garante entregas no prazo, sem surpresas e com qualidade consistente.
          </p>
        </Reveal>

        <div className="process__grid">
          {processSteps.map((step, i) => (
            <Reveal key={step.id} delay={i * 100}>
              <ProcessCard step={step} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
