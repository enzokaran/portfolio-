import { Instagram, MessageCircle, Mail } from 'lucide-react';
import './Footer.css';

const socials = [
  { Icon: Instagram, label: 'Instagram', href: 'https://instagram.com/' },
  { Icon: MessageCircle, label: 'WhatsApp', href: 'https://wa.me/5500000000000' },
  { Icon: Mail, label: 'E-mail', href: 'mailto:contato@seusite.com.br' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner container">
        <a href="#" className="footer__logo">
          dev<span className="text-gradient">folio</span>
        </a>
        <div className="footer__socials">
          {socials.map(({ Icon, label, href }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer"
              className="footer__social-link" aria-label={label}>
              <Icon size={18} strokeWidth={1.5} />
            </a>
          ))}
        </div>
        <p className="footer__copy">
          © {new Date().getFullYear()} devfolio. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
