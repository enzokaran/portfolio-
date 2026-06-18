import projects from '../assets/data/projects';
import ProjectCard from '../components/ProjectCard';
import Reveal from '../components/Reveal';
import './Projects.css';

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <Reveal>
          <span className="eyebrow">// projetos</span>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="projects__heading">
            Trabalhos que<br />
            <span className="text-gradient">geram resultado</span>
          </h2>
        </Reveal>
        <Reveal delay={150}>
          <p className="projects__sub">
            Cada projeto nasce de uma necessidade real e é entregue com atenção<br className="desktop-only" /> a cada detalhe — do design ao desempenho.
          </p>
        </Reveal>

        <div className="projects__grid">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={i * 80}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
