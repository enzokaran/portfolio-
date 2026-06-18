import { MessageCircle, ClipboardList, Code2, Rocket } from 'lucide-react';
import './ProcessCard.css';

const iconMap = { MessageCircle, ClipboardList, Code2, Rocket };

export default function ProcessCard({ step, index }) {
  const Icon = iconMap[step.icon] || MessageCircle;

  return (
    <div className="process-card glass">
      <div className="process-card__index">{String(index + 1).padStart(2, '0')}</div>
      <div className="process-card__icon-wrap">
        <Icon size={24} strokeWidth={1.5} />
      </div>
      <h3 className="process-card__title">{step.title}</h3>
      <p className="process-card__desc">{step.description}</p>
      <div className="process-card__line" />
    </div>
  );
}
