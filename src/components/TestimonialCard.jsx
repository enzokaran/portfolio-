import { Star } from 'lucide-react';
import './TestimonialCard.css';

export default function TestimonialCard({ testimonial }) {
  return (
    <div className="testimonial-card glass">
      <div className="testimonial-card__stars">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={14} fill="var(--blue)" color="var(--blue)" />
        ))}
      </div>
      <blockquote className="testimonial-card__quote">
        "{testimonial.quote}"
      </blockquote>
      <div className="testimonial-card__author">
        <div className="testimonial-card__avatar">{testimonial.avatar}</div>
        <div className="testimonial-card__info">
          <strong className="testimonial-card__name">{testimonial.name}</strong>
          <span className="testimonial-card__role">{testimonial.role} · {testimonial.company}</span>
        </div>
      </div>
    </div>
  );
}
