import testimonials from '../assets/data/testimonials';
import TestimonialCard from '../components/TestimonialCard';
import Reveal from '../components/Reveal';
import './Testimonials.css';

export default function Testimonials() {
  return (
    <section id="testimonials" className="section testimonials">
      <div className="container">
        <Reveal>
          <span className="eyebrow">// depoimentos</span>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="testimonials__heading">
            O que dizem os<br />
            <span className="text-gradient">meus clientes</span>
          </h2>
        </Reveal>

        <div className="testimonials__grid">
          {testimonials.map((t, i) => (
            <Reveal key={t.id} delay={i * 100}>
              <TestimonialCard testimonial={t} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
