import { ExternalLink } from 'lucide-react';
import './ProjectCard.css';

export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-card__image-wrap">
        <img src={project.image} alt={project.name} className="project-card__image" loading="lazy" />
        <div className="project-card__overlay">
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-card__view-btn">
            <ExternalLink size={18} />
            Ver projeto
          </a>
        </div>
      </div>
      <div className="project-card__body">
        <span className="project-card__category eyebrow">{project.category}</span>
        <h3 className="project-card__name">{project.name}</h3>
        <p className="project-card__desc">{project.description}</p>
        <div className="project-card__tags">
          {project.tags.map((tag) => (
            <span key={tag} className="project-card__tag">{tag}</span>
          ))}
        </div>
      </div>
    </article>
  );
}
