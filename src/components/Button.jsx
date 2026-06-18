import './Button.css';

export default function Button({ children, variant = 'primary', href, onClick, target }) {
  const Tag = href ? 'a' : 'button';

  return (
    <Tag
      className={`btn btn--${variant}`}
      href={href}
      onClick={onClick}
      target={target}
      rel={target === '_blank' ? 'noopener noreferrer' : undefined}
    >
      <span className="btn__text">{children}</span>
      {variant === 'primary' && <span className="btn__glow" />}
    </Tag>
  );
}
